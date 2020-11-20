import LightboxItem from './LightboxItem'

export default class LightboxList {

    public items: LightboxItem[] = []

    public add(item: ILightboxItemObject|LightboxItem): LightboxItem {
        if (!(item instanceof LightboxItem)) {
            item = new LightboxItem(item)
        }

        this.items.push(item as LightboxItem)

        return <LightboxItem>item
    }

    public find(index: number): LightboxItem|null {
        return this.items[index] || null
    }

    public findBy(src: string): LightboxItem|null {
        return this.items.find(item => item.src === src) || null
    }

    public refresh(): void {
        this.items.forEach((item: LightboxItem, index: number) => item.index = index)
    }

    public remove(index: number): LightboxItem|null {
        const item = this.find(index)

        if (item !== null) {
            this.items.splice(index, 1)
        }

        return item
    }

}
