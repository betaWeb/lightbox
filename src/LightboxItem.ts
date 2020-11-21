import LightboxGroup from './LightboxGroup'

export default class LightboxItem {

    private readonly _el: HTMLElement = null

    private readonly _src: string = null

    private readonly _handler: EventListener = null

    private readonly _group: string = null

    private _index: number = null

    private _legend: string = null

    constructor({el, src, legend, handler, group, index}: ILightboxItemObject) {
        this._el = el
        this._src = src
        this._handler = handler
        this._group = group
        this._index = index
        this._legend = legend || null

        this._handler = this._handler.bind(this)

        this.bindEventHandler()
    }

    public get el(): HTMLElement {
        return this._el
    }

    public get src(): string {
        return this._src
    }

    public get handler(): EventListener {
        return this._handler
    }

    public get legend(): string {
        return this._legend
    }

    public get group(): string {
        return this._group
    }

    public get index(): number {
        return this._index
    }

    public set index(index) {
        this._index = index
    }

    public set legend(legend: string) {
        this._legend = legend
    }

    public removeEvent(): this {
        this._el.removeEventListener('click', this._handler as EventListener)

        return this
    }

    private bindEventHandler(): void {
        this._el.addEventListener('click', this._handler as EventListener)
    }

}
