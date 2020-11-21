import {debounce, getElementSrc, getImageBoundings} from "./utils"
import LightboxGroup from "./LightboxGroup"
import LightboxItem from "./LightboxItem"

export default class Lightbox {

	public elements: NodeList

	public options: Options

	private _groups: LightboxGroup = null

	private _lightbox: HTMLDivElement = null

	private _lightbox_inner: HTMLDivElement = null

	private _lightbox_legend?: HTMLDivElement = null

	private _image: HTMLImageElement = null

	private _nav_prev?: HTMLDivElement = null

	private _nav_next?: HTMLDivElement = null

	private _nav_dots?: HTMLUListElement = null

	private _current: LightboxItem = null

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
			nav_prev_class: 'lightbox--nav-prev',
			nav_next_class: 'lightbox--nav-next',
			dots: true,
			nav_dots_class: 'lightbox--nav-dots',
			created: () => {},
			onShow: () => {},
			onHide: () => {},
			onNav: () => {},
			onAdd: () => {},
			onRemove: () => {}
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
		this.onKeyup = this.onKeyup.bind(this)
		this.onResize = this.onResize.bind(this)

		this.attachEvents()

		this.options.created(this._groups)
	}

	public show(src: string, group?: string): LightboxItem|null {
		const item = this.find(src, group)

		if (item !== null) {
			this.revealImage(item)
		}

		return item
	}

	public hide(): this {
		this._lightbox.classList.remove(this.options.lightbox_visible_class)

		if (this.options.prevent_scroll) {
			this.options.prevent_scroll_element.classList.remove(this.options.prevent_scroll_class)
		}

		this._lightbox_inner.style.backgroundImage = null
		this._image = null

		this.options.onHide(this._current)

		this.setCurrent(null)

		return this
	}

	public find(src: string, group?: string): LightboxItem|null {
		let item = null

		if (group) {
			item = this._groups.get(group).findBy(src)
		} else {
			const groups = this._groups.all()

			for (let groupName in groups) {
				if (groups.hasOwnProperty(groupName)) {
					item = this._groups.get(groupName).findBy(src)

					if (item !== null) {
						break
					}
				}
			}
		}

		return item
	}

	public prev(): this {
		return this.nav(-1)
	}

	public next(): this {
		return this.nav(1)
	}

	public add(el: HTMLElement|HTMLImageElement): this {
		const item = this.storeElement(el)

		this.options.onAdd(item)

		return this
	}

	public remove(el: HTMLElement|HTMLImageElement): LightboxItem|null {
		const group = el.dataset.group || LightboxGroup.DEFAULT_NAME
		const item = this._groups.retrieve(group, getElementSrc(el))

		if (item !== null) {
			this._groups.get(group).remove(item.index)

			if (this._groups.size(group) === 0) {
				this._groups.remove(group)
			}

			this.options.onRemove(item)

			return item
		}

		return null
	}

	public refresh(groupName: string = null): object {
		let altered = {}

		if (groupName === null) {
			const groups = this._groups.all()

			for (let name in groups) {
				if (groups.hasOwnProperty(name)) {
					altered = {
						...altered,
						...this.refreshGroup(name)
					}
				}
			}
		} else {
			altered = {
				...altered,
				...this.refreshGroup(groupName)
			}
		}

		return altered
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
		window.removeEventListener('keyup', this.onKeyup as EventListener)

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

		this.setCurrent(null)
	}

	private nav(direction: number): this {
		const { group, index } = this._current
		const count = this._groups.size(group)
		const newIndex = direction < 0
			? index - 1 < 0 ? count : index
			: index + 1 === count ? -1 : index

		let item: LightboxItem = this._groups.retrieve(group, newIndex + direction)

		if (item !== null) {
			this.options.onNav(item, direction)
			this.goTo(item)
		}

		return this
	}

	private revealImage(item: LightboxItem): void {
		this._lightbox.classList.add(this.options.image_loading_class)

		this._image = new Image()
		this._image.src = item.src

		this._image.onload = (): void => {
			this.setInnerBoundings()

			this._lightbox_inner.style.backgroundImage = `url('${this._image.src}')`

			setTimeout(() => {
				this._lightbox.classList.remove(this.options.image_loading_class)
				this.options.onShow(item)
			}, 300)
		}

		if (this.options.prevent_scroll) {
			this.options.prevent_scroll_element.classList.add(this.options.prevent_scroll_class)
		}

		this._lightbox.classList.add(this.options.lightbox_visible_class)

		this.displayLegend(item.legend)

		if (this.options.dots === true) {
			this._nav_dots.childNodes.forEach((dot: HTMLElement) => {
				dot.classList.toggle('active', parseInt(dot.dataset.index, 10) === item.index)
			})
		}
	}

	private goTo(item: LightboxItem): void {
		this.hide()

		this.setCurrent(item)

		this.revealImage(item)
	}

	private refreshGroup(groupName: string): object {
		const elements = Array.from(
			document.querySelectorAll(
				`${this.options.selector}[data-group="${groupName}"]`
			)
		)
		const group = this._groups.get(groupName)
		const items = group.items
		let added = []
		let removed = []

		if (elements.length !== items.length) {
			added = elements.filter(
				el => !items.map(i => i.src).includes(getElementSrc(el))
			)

			removed = items.filter(
				item => !elements.map(getElementSrc).includes(item.src)
			)

			removed.forEach(({index}: LightboxItem) => group.remove(index))
			added.forEach((el: HTMLElement) => this.storeElement(el))

			group.refresh()
		}

		return {[groupName]: {added, removed}}
	}

	private createLightBox(): void {
		this._lightbox_legend = document.createElement('div')
		this._lightbox_legend.classList.add(this.options.lightbox_legend_class)

		this._lightbox_inner = document.createElement('div')
		this._lightbox_inner.classList.add(this.options.lightbox_inner_class)
		this._lightbox_inner.appendChild(this._lightbox_legend)

		this._lightbox = document.createElement('div')
		this._lightbox.classList.add(this.options.lightbox_class)
		this._lightbox.appendChild(this._lightbox_inner)

		if (this.options.nav === true) {
			this._nav_prev = document.createElement('div')
			this._nav_next = document.createElement('div')

			this._nav_prev.classList.add(this.options.nav_prev_class)
			this._nav_next.classList.add(this.options.nav_next_class)

			this._nav_prev.addEventListener('click', this.prev as EventListener)
			this._nav_next.addEventListener('click', this.next as EventListener)

			this._lightbox_inner.appendChild(this._nav_prev)
			this._lightbox_inner.appendChild(this._nav_next)
		}

		if (this.options.dots === true) {
			this._nav_dots = document.createElement('ul')

			this._nav_dots.classList.add(this.options.nav_dots_class)

			this._lightbox.appendChild(this._nav_dots)
		}

		document.body.appendChild(this._lightbox)
	}

	private attachEvents(): void {
		window.addEventListener('resize', debounce(this.onResize, 300) as EventListener)
		window.addEventListener('keyup', this.onKeyup)

		this.createLightBox()

		this._lightbox.addEventListener('click', this.hide)
		this._lightbox_inner.addEventListener('click', (e: MouseEvent) => e.stopPropagation())

		this.elements.forEach(async (el: HTMLElement): Promise<void> => {
			await this.storeElement(el)
		})
	}

	private storeElement(el: HTMLElement): LightboxItem {
		const ctx = this
		const groupName = el.dataset.group || LightboxGroup.DEFAULT_NAME
		const handler = function (): void {
			ctx.setCurrent(this)

			const hideNav = ctx._groups.size(groupName) <= 1

			ctx._nav_prev.classList.toggle('is-hidden', hideNav)
			ctx._nav_next.classList.toggle('is-hidden', hideNav)

			if (!hideNav) {
				ctx.createNavDots(this)
			}

			ctx.revealImage(this)
		}

		this._groups.create(groupName)

		const lightboxItem = new LightboxItem({
			el,
			src: getElementSrc(el),
			handler,
			group: groupName,
			index: this._groups.size(groupName),
			legend: el.dataset.legend || null
		})

		this._groups.addTo(groupName, lightboxItem)

		return lightboxItem
	}

	private displayLegend(legend?: string): void {
		this._lightbox_legend.style.display = legend ? '' : 'none'
		this._lightbox_legend.innerHTML = legend || ''
	}

	private createNavDots(activeItem: LightboxItem): void {
		this._nav_dots.innerHTML = ''

		const group = this._current.group

		this._groups.get(group).items.forEach((item: LightboxItem): void => {
			const dot = document.createElement('li')

			dot.dataset['index'] = item.index.toString()

			if (item === activeItem) {
				dot.classList.add('active')
			}

			dot.addEventListener('click', e => {
				e.preventDefault()
				e.stopPropagation()

				this.goTo(item)
			})

			this._nav_dots.appendChild(dot)
		})
	}

	private onResize(): void {
		if (this._image !== null) {
			this.setInnerBoundings()
		}
	}

	private onKeyup(e): void {
		e.preventDefault()

		if (this._current === null) {
			return
		}

		const hasSiblings = this._groups.size(this._current.group) > 1

		switch (e.key) {
			case 'ArrowLeft':
				if (hasSiblings) {
					this.prev()
				}
				break
			case 'ArrowRight':
				if (hasSiblings) {
					this.next()
				}
				break
			case 'Escape':
				this.hide()
				break
		}
	}

	private setInnerBoundings(): void {
		const {width, height}: ImageBoundings = getImageBoundings(
			this._image,
			this.options.inner_offset
		)

		this._lightbox_inner.style.width = width + 'px'
		this._lightbox_inner.style.height = height + 'px'
	}

	private setCurrent(item: LightboxItem): void {
		this._current = item
	}
}

if (window && document) {
	window['Lightbox'] = Lightbox
}
