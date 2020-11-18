export default class LightboxList {

    public name: string

    public items: LightboxListItem[]

    public add(item: LightboxListItem) {
        this.items.push(item)
    }

}
