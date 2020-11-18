declare class Lightbox {

	public elements: NodeList
	public options: Options

	private _groups: LightboxGroup
	private _lightbox: HTMLDivElement
	private _lightbox_inner: HTMLDivElement
	private _image: HTMLImageElement
	private _nav_prev: HTMLDivElement
	private _nav_next: HTMLDivElement
	private _current: LightboxItem

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

	public static readonly DEFAULT_NAME: string

	public groups: ILightboxListGroup

	public all(): ILightboxListGroup
	public has(name: string): boolean
	public get(name: string): LightboxList
	public create(name: string): void
	public addTo(name: string, item: ILightboxItemObject|LightboxItem): LightboxItem
	public retrieve(name: string, index: number): LightboxItem|null
	public size(name: string): number

}

declare class LightboxList {

	public items: LightboxItem[]

	public add(item: ILightboxItemObject|LightboxItem): LightboxItem
	public find(index: number): LightboxItem|null
	public remove(index: number): LightboxItem|null

}

declare class LightboxItem {

	public el: HTMLElement
	public src: string
	public handler: Function
	private _group: string
	private _index: number

	constructor(el: HTMLElement, src: string, handler: EventListener)

	public get group(): string
	public get index(): number

	public set group(group: string)
	public set index(index: number)

	public addEvent(handler: EventListener|null): this
	public removeEvent(): this
}

declare interface ILightboxListGroup {
	[key: string]: LightboxList
}

declare interface ILightboxItemObject {
	el: HTMLElement
	src: string
	handler?: EventListener
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
