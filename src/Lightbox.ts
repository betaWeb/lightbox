import {aspectRatioFit, debounce, getImageBoundings} from "./utils";
import LightboxGroup from "./LightboxGroup";
import LightboxItem from "./LightboxItem";

export default class Lightbox {

	public elements: NodeList

	public options: Options

	private _groups: LightboxGroup = null

	private _lightbox: HTMLDivElement = null

	private _lightbox_inner: HTMLDivElement = null

	private _image: HTMLImageElement = null

	private _nav_prev: HTMLDivElement = null

	private _nav_next: HTMLDivElement = null

	private _current: Current = {
		group: '',
		index: -1
	}

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
			inner_offset: 30,
			nav: true,
			nav_prev_class: 'lightbox--prev',
			nav_next_class: 'lightbox--next'
		}
	}

	constructor(options = {}) {
		this.options = {
			...Lightbox.default_options,
			...options
		}

		this.elements = document.querySelectorAll(this.options.selector)

		if (this.elements.length === 0) {
			throw new Error('Lightbox::constructor - no elements found')
		}

		this._groups = new LightboxGroup()

		this.hide = this.hide.bind(this)
		this.prev = this.prev.bind(this)
		this.next = this.next.bind(this)
		this.onEscape = this.onEscape.bind(this)
		this.onResize = this.onResize.bind(this)

		this.attachEvents()
	}

	public show(src: string): void {
		this._lightbox.classList.add(this.options.image_loading_class)

		this._image = new Image()

		this._image.onload = async (): Promise<void> => {
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

	public hide(): this {
		this._lightbox.classList.remove(this.options.lightbox_visible_class)

		if (this.options.prevent_scroll) {
			this.options.prevent_scroll_element.classList.remove(this.options.prevent_scroll_class)
		}

		this._lightbox_inner.style.backgroundImage = null
		this._image = null

		this.setCurrent()

		return this
	}

	public prev(): this {
		return this.nav(-1)
	}

	public next(): this {
		return this.nav(1)
	}

	public destroy(): void {
		for (let group in this._groups.all()) {
			if (this._groups.hasOwnProperty(group)) {
				const entries = Object.values(this._groups[group])

				if (entries.length > 0) {
					entries.forEach((entry: LightboxItem): void => {
						entry.removeEvent()
					})
				}
			}
		}

		window.removeEventListener('resize', debounce(this.onResize, 300) as EventListener)
		window.removeEventListener('keyup', this.onEscape)

		this._nav_prev.removeEventListener('click', this.prev)
		this._nav_next.removeEventListener('click', this.next)

		this._lightbox_inner.removeEventListener('click', (e: MouseEvent) => e.stopPropagation())
		this._lightbox_inner.remove()

		this._lightbox.removeEventListener('click', this.hide)
		this._lightbox.remove()

		this._lightbox = null
		this._lightbox_inner = null
		this._image = null
		this._groups = null
		this._nav_prev = null
		this._nav_next = null

		this.setCurrent()
	}

	private nav(direction: number): this {
		const { group, index } = this._current
		const count = this._groups.size(group)
		const newIndex = direction < 0
			? index - 1 < 0 ? count : index
			: index + 1 === count ? -1 : index

		let item: LightboxListItem = this._groups.retrieve(group, newIndex + direction)

		this.hide()

		this.setCurrent(group, newIndex + direction)

		this.show(item.src)

		return this
	}

	private createLightBox(): void {
		this._lightbox_inner = document.createElement('div')
		this._lightbox_inner.classList.add(this.options.lightbox_inner_class)

		this._lightbox = document.createElement('div')
		this._lightbox.classList.add(this.options.lightbox_class)
		this._lightbox.appendChild(this._lightbox_inner)

		if (this.options.nav === true) {
			const nav_prev = document.createElement('div')
			const nav_next = document.createElement('div')

			nav_prev.classList.add(this.options.nav_prev_class)
			nav_next.classList.add(this.options.nav_next_class)

			nav_prev.addEventListener('click', this.prev)
			nav_next.addEventListener('click', this.next)

			this._lightbox_inner.appendChild(nav_prev)
			this._lightbox_inner.appendChild(nav_next)

			this._nav_prev = nav_prev
			this._nav_next = nav_next
		}

		document.body.appendChild(this._lightbox)
	}

	private attachEvents(): void {
		window.addEventListener('resize', debounce(this.onResize, 300) as EventListener)
		window.addEventListener('keyup', this.onEscape)

		this.createLightBox()

		this._lightbox.addEventListener('click', this.hide)
		this._lightbox_inner.addEventListener('click', (e: MouseEvent) => e.stopPropagation())

		this.elements.forEach(async (el: HTMLElement): Promise<void> => {
			await this.storeElement(el)
		})
	}

	private createLegend(legend: string): void {
		const div = document.createElement('div')

		div.classList.add(this.options.lightbox_legend_class)
		div.innerHTML = legend

		this._lightbox_inner.appendChild(div)
	}

	private async storeElement(el: HTMLElement): Promise<void> {
		const src = el.constructor === HTMLImageElement
			? (el as HTMLImageElement).src
			: el.dataset.src

		const group = el.dataset.group || 'default'
		// const legend = el.dataset.legend || null

		this._groups.create(group)

		/*if (legend !== null) {
				this.createLegend(legend)
		}*/

		const lightboxItem = new LightboxItem(el, src)
		const index = this._groups.size(group)

		const event_handler = (): void => {
			this.setCurrent(group, index)

			this.show(src)
		}

		lightboxItem.addEvent(event_handler)

		this._groups.addTo(group, lightboxItem)
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
		const {width, height}: ImageBoundings = getImageBoundings(
			this._image,
			this.options.inner_offset
		)

		this._lightbox_inner.style.width = width + 'px'
		this._lightbox_inner.style.height = height + 'px'
	}

	private setCurrent(
		group: string = '',
		index: number = -1
	): void {
		this._current.group = group
		this._current.index = index
	}
}

if (window && document) {
	window['Lightbox'] = Lightbox
}
