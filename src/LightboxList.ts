import LightboxItem from './LightboxItem'

export default class LightboxList {

    public items: LightboxItem[] = []

    public add(item: ILightboxItemObject|LightboxItem): LightboxItem {
        if (!(item instanceof LightboxItem)) {
            const {el, src, handler} = item as ILightboxItemObject

            item = new LightboxItem(el, src, handler)
        }

        this.items.push(item as LightboxItem)

        return <LightboxItem>item
    }

    public find(index: number): LightboxItem|null {
        return this.items[index] || null
    }

    public remove(index: number): LightboxItem|null {
        const item = this.find(index)

        if (item !== null) {
            delete this.items[index]
        }

        return item
    }

}
