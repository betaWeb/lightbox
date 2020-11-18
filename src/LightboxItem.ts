export default class LightboxItem {

    public el: HTMLElement = null

    public src: string = null

    public handler: EventListener = null

    constructor(el: HTMLElement, src: string, handler: EventListener = null) {
        this.el = el
        this.src = src
        this.handler = handler
    }

    public addEvent(handler: EventListener|null = null): void {
        if (handler !== null) {
            this.handler = handler
        }

        this.el.addEventListener('click', this.handler as EventListener)
    }

    public removeEvent(): void {
        this.el.removeEventListener('click', this.handler as EventListener)
    }

}
