import {debounce} from "./utils";

declare type Options = {
    selector: string
    lightbox_class: string
    lightbox_inner_class: string
    lightbox_legend_class: string
    lightbox_visible_class: string
    image_loading_class: string
    prevent_scroll: boolean
    prevent_scroll_class: string
    prevent_scroll_element: HTMLElement
    inner_offset: number
}

declare type LightboxListItem = {
    event_handler: Function
    lightbox?: HTMLDivElement
    lightbox_inner?: HTMLDivElement
}

declare type AspectRatio = {
    ratio: number
    width: number
    height: number
    orientation: string
}

declare type Groups = {
    [key: string]: Map<HTMLElement, LightboxListItem|null>
}

export default class Lightbox {

    public elements: NodeList

    public options: Options

    private _lightbox: HTMLDivElement

    private _lightbox_inner: HTMLDivElement

    private _groups: Groups = {}

    private _image: HTMLImageElement = null

    public static get default_options(): Options {
        return {
            selector: '.lightbox--link',
            lightbox_class: 'lightbox',
            lightbox_inner_class: 'lightbox--inner',
            lightbox_legend_class: 'lightbox--legend',
            lightbox_visible_class: 'visible',
            image_loading_class: 'is-loading',
            prevent_scroll: true,
            prevent_scroll_class: 'prevent-scroll',
            prevent_scroll_element: document.body,
            inner_offset: 30
        }
    }

    constructor(options = {}) {
        this.options = {
            ...Lightbox.default_options,
            ...options
        }

        this.elements = document.querySelectorAll(this.options.selector)

        if (this.elements.length === 0) {
            return
        }

        this.hide = this.hide.bind(this)
        this.onEscape = this.onEscape.bind(this)
        this.onResize = this.onResize.bind(this)

        this.attachEvents()
    }

    public async show(src: string): Promise<void> {
        this._lightbox.classList.add(this.options.image_loading_class)

        this._image = new Image()

        this._image.onload = async () => {
            await this.setInnerBoundings()

            this._lightbox_inner.style.backgroundImage = `url('${this._image.src}')`

            setTimeout(() => {
                this._lightbox.classList.remove(this.options.image_loading_class)
            }, 300)
        }

        this._image.src = src

        if (this.options.prevent_scroll) {
            this.options.prevent_scroll_element.classList.add(this.options.prevent_scroll_class)
        }

        this._lightbox.classList.add(this.options.lightbox_visible_class)
    }

    public hide(): void {
        this._lightbox.classList.remove(this.options.lightbox_visible_class)

        if (this.options.prevent_scroll) {
            this.options.prevent_scroll_element.classList.remove(this.options.prevent_scroll_class)
        }

        this._lightbox_inner.style.backgroundImage = null
        this._image = null

        this._lightbox.remove()
    }

    public destroy(): void {
        for (let group in this._groups) {
            if (this._groups.hasOwnProperty(group)) {
                const entries = Array.from(this._groups[group].entries())

                if (entries.length > 0) {
                    entries.forEach(([el, {event_handler, lightbox, lightbox_inner}]) => {
                        if (lightbox_inner) {
                            lightbox_inner.removeEventListener('click', (e: MouseEvent) => e.stopPropagation())
                            lightbox_inner.remove()
                        }

                        if (lightbox) {
                            lightbox.removeEventListener('click', this.hide)
                            lightbox.remove()
                        }

                        el.removeEventListener('click', event_handler as EventListener)
                    })
                }
            }
        }

        window.removeEventListener('resize', debounce(this.onResize, 300) as EventListener)
        window.removeEventListener('keyup', this.onEscape)

        this._lightbox = null
        this._lightbox_inner = null
        this._image = null
        this._groups = {}
    }

    private attachEvents(): void {
        window.addEventListener('resize', debounce(this.onResize, 300) as EventListener)
        window.addEventListener('keyup', this.onEscape)

        this.elements.forEach(async (el: HTMLElement): Promise<void> => {
            const event_handler = async _ => await this.onElementClick(el)

            el.addEventListener('click', event_handler)

            for (let group in this._groups) {
                if (this._groups.hasOwnProperty(group)) {
                    this._groups[group].set(el, { event_handler })
                }
            }
        })
    }

    private createLightBox(): void {
        this._lightbox_inner = document.createElement('div')
        this._lightbox_inner.classList.add(this.options.lightbox_inner_class)

        this._lightbox = document.createElement('div')
        this._lightbox.classList.add(this.options.lightbox_class)
        this._lightbox.appendChild(this._lightbox_inner)

        document.body.appendChild(this._lightbox)
    }

    private createLegend(legend: string): void {
        const div = document.createElement('div')

        div.classList.add(this.options.lightbox_legend_class)
        div.innerHTML = legend

        this._lightbox_inner.appendChild(div)
    }

    private async onElementClick(el: HTMLImageElement|HTMLElement): Promise<void> {
        const src = el.constructor === HTMLImageElement ? el.src : el.dataset.src
        const group = el.dataset.group || 'default'

        if (!this._groups[group]) {
            this._groups[group] = new Map()
        }

        if (!this._groups[group].has(el)) {
            const legend = el.dataset.legend || null

            this.createLightBox()

            this._lightbox.addEventListener('click', this.hide)
            this._lightbox_inner.addEventListener('click', (e: MouseEvent) => e.stopPropagation())

            if (legend !== null) {
                this.createLegend(legend)
            }

            this._groups[group].set(el, {
                ...this._groups[group].get(el),
                lightbox: this._lightbox,
                lightbox_inner: this._lightbox_inner,
            })
        } else {
            const {lightbox_inner, lightbox} = this._groups[group].get(el)

            this._lightbox = lightbox
            this._lightbox_inner = lightbox_inner

            document.body.appendChild(this._lightbox)
        }

        await this.show(src)
    }

    private onEscape(e: KeyboardEvent): void {
        if (e.key === 'Escape') {
            this.hide()
        }
    }

    private async onResize(): Promise<void> {
        if (this._image !== null) {
            await this.setInnerBoundings()
        }
    }

    private async setInnerBoundings(): Promise<void> {
        const { naturalWidth, naturalHeight } = this._image
        const ratio = this.aspectRatioFit(
            naturalWidth,
            naturalHeight,
            window.innerWidth,
            window.innerHeight
        ) as AspectRatio
        const {width, height, orientation} = ratio
        const { inner_offset } = this.options

        let offsetWidth = 0
        let offsetHeight = 0

        switch (orientation) {
            case 'landscape':
                offsetWidth = inner_offset
                break
            case 'portrait':
                offsetHeight = inner_offset
                break
            case 'even':
                offsetWidth = inner_offset
                offsetHeight = inner_offset
                break
        }

        this._lightbox_inner.style.width = `${width - (2 * offsetWidth)}px`
        this._lightbox_inner.style.height = `${height - (2 * offsetHeight)}px`
    }

    private aspectRatioFit(
        srcWidth: number,
        srcHeight: number,
        maxWidth: number,
        maxHeight: number
    ): AspectRatio {
        let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight)
        let orientation = 'even'

        if (srcWidth > srcHeight) {
            orientation ='landscape'
        } else if (srcWidth < srcHeight) {
            orientation = 'portrait'
        }

        let width = srcWidth * ratio
        let height = srcHeight * ratio

        if (width <= maxWidth || height <= maxHeight) {
            orientation = 'even'
        }

        return {
            ratio,
            width,
            height,
            orientation
        }
    }
}

if (window && document) {
    window['Lightbox'] = Lightbox
}
