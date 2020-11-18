declare class Lightbox {

	public elements: NodeList
	public options: Options

	private _groups: LightboxGroup
	private _lightbox: HTMLDivElement
	private _lightbox_inner: HTMLDivElement
	private _image: HTMLImageElement
	private _nav_prev: HTMLDivElement
	private _nav_next: HTMLDivElement
	private _current: Current

	public static get default_options(): Options

	constructor(options: Options)

	public show(src: string): void
	public show(): Lightbox
	public prev(): Lightbox
	public next(): Lightbox
	public destroy(): void

	private nav(direction: number): Lightbox
	private createLightBox(): void
	private attachEvents(): void
	private createLegend(legend: string): void
	private storeElement(el: HTMLElement): Promise<void>
	private onEscape(e: KeyboardEvent): void
	private onResize(): Promise<void>
	private setInnerBoundings(): Promise<void>
	private aspectRatioFit(srcWidth: number, srcHeight: number, maxWidth: number, maxHeight: number): AspectRatio
	private setCurrent(group: string, index: number): void

}

declare class LightboxGroup {

	public groups: LightboxListGroup

	public all(): LightboxListGroup

	public has(name: string): boolean

	public create(name: string): void

	public addTo(name: string, item: LightboxListItem): LightboxListItem

	public retrieve(name: string, index: number): LightboxListItem|null

	public size(name: string): number

}

declare class LightboxItem {

	public el: HTMLElement
	public src: string
	public handler: Function

	constructor(el: HTMLElement, src: string, handler: EventListener)

	public addEvent(handler: EventListener|null): void
	public removeEvent(): void
}

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
	nav: boolean
	nav_prev_class: string
	nav_next_class: string
}

declare interface LightboxListGroup {
	[key: string]: LightboxListItem[]
}

declare interface LightboxListItem {
	el: HTMLElement
	src: string
	event_handler?: Function
}

declare type AspectRatio = {
	ratio: number
	width: number
	height: number
	orientation: string
}

declare type ImageBoundings = {
	width: number
	height: number
}

declare type Current = {
	group: string
	index: number
}
