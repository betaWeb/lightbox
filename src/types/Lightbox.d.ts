declare class Lightbox {

	public elements: NodeList
	public options: Options

	private _groups: LightboxGroup
	private _lightbox: HTMLDivElement
	private _lightbox_inner: HTMLDivElement
	private _lightbox_legend?: HTMLDivElement
	private _image: HTMLImageElement
	private _nav_prev?: HTMLDivElement
	private _nav_next?: HTMLDivElement
	private _nav_dots?: HTMLDivElement
	private _current: LightboxItem

	public static get default_options(): Options

	constructor(options: Options)

	public show(src: string, group?: string): LightboxItem|null
	public hide(): Lightbox
	public add(el: HTMLElement|HTMLImageElement): Lightbox
	public remove(el: HTMLElement|HTMLImageElement): LightboxItem|null
	public refresh(groupName: string): object
	public prev(): Lightbox
	public next(): Lightbox
	public destroy(): void

	private nav(direction: number): Lightbox
	private refreshGroup(groupName: string): object
	private revealImage(item: LightboxItem): void
	private goTo(item: LightboxItem): void
	private createLightBox(): void
	private attachEvents(): void
	private createLegend(legend: string): void
	private storeElement(el: HTMLElement): void
	private displayLegend(legend?: string): void
	private createNavDots(activeItem: LightboxItem): void
	private onKeyup(e: KeyboardEvent): void
	private onResize(): void
	private setInnerBoundings(): void
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
	public retrieve(name: string, needle: string|number): LightboxItem|null
	public remove(name: string): void
	public size(name: string): number

}

declare class LightboxList {

	public items: LightboxItem[]

	public add(item: ILightboxItemObject|LightboxItem): LightboxItem
	public find(index: number): LightboxItem|null
	public findBy(src: string): LightboxItem|null
	public refresh(): void
	public remove(index: number): LightboxItem|null

}

declare class LightboxItem {

	public el: HTMLElement
	public src: string
	public handler: EventListener
	public legend: string
	private _group: string
	private _index: number

	constructor(params: ILightboxItemObject)

	public get group(): string
	public get index(): number

	public set group(group: string)
	public set index(index: number)

	public addEvent(handler?: EventListener): this
	public removeEvent(): this
}

declare interface ILightboxListGroup {
	[key: string]: LightboxList
}

declare interface ILightboxItemObject {
	el: HTMLElement
	src: string
	handler?: EventListener
	legend?: string
}

declare type Options = {
	selector: string
	lightbox_class?: string
	lightbox_inner_class?: string
	lightbox_legend_class?: string
	lightbox_visible_class?: string
	image_loading_class?: string
	prevent_scroll?: boolean
	prevent_scroll_class?: string
	prevent_scroll_element?: HTMLElement
	inner_offset?: number
	nav?: boolean
	nav_prev_class?: string
	nav_next_class?: string
	dots?: boolean
	nav_dots_class?: string
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
