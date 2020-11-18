declare class Lightbox {

	public elements: NodeList

	public options: Options

	private _groups: Groups

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
	inner_offset: number,
	nav: boolean,
	nav_prev_class: string
	nav_next_class: string
}

declare interface LightboxListItem {
	el?: HTMLElement,
	event_handler?: Function
	lightbox?: HTMLDivElement
	lightbox_inner?: HTMLDivElement
	src?: string
}

declare type AspectRatio = {
	ratio: number
	width: number
	height: number
	orientation: string
}

declare type Groups = {
	[key: string]: LightboxListItem[]
}

declare type Current = {
	group: string
	index: number
}
