import LightboxGroup from './LightboxGroup'

export default class LightboxItem {

    public el: HTMLElement = null

    public src: string = null

    public handler: EventListener = null

    public legend: string = null

    private _group: string = null

    private _index: number = null

    constructor({el, src, handler, legend}: ILightboxItemObject) {
        this.el = el
        this.src = src
        this.handler = handler || null
        this.legend = legend || null
    }

    public get group(): string {
        return this._group
    }

    public get index(): number {
        return this._index
    }

    public set group(group: string) {
        this._group = group || LightboxGroup.DEFAULT_NAME
    }

    public set index(index: number) {
        this._index = index
    }

    public addEvent(handler?: EventListener): this {
        if (handler) {
            this.handler = handler
        }

        this.el.addEventListener('click', this.handler as EventListener)

        return this
    }

    public removeEvent(): this {
        this.el.removeEventListener('click', this.handler as EventListener)

        return this
    }

}
