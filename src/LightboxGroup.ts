import LightboxList from './LightboxList'
import LightboxItem from "./LightboxItem";

export default class LightboxGroup {

    public static readonly DEFAULT_NAME: string = "_DEFAULT"

    public groups: ILightboxListGroup = {}

    public all(): ILightboxListGroup {
        return this.groups
    }

    public has(name: string): boolean {
        return this.groups[name] !== undefined
    }

    public get(name: string): LightboxList {
        // @ts-ignore
        return this.groups[name]
    }

    public create(name: string): void {
        if (!this.has(name)) {
            // @ts-ignore
            this.groups[name] = new LightboxList()
        }
    }

    public addTo(name: string, item: ILightboxItemObject|LightboxItem): LightboxItem {
        this.create(name)

        this.get(name).add(item)

        return item as LightboxItem
    }

    public retrieve(name: string, needle: string|number): LightboxItem|null {
        if (typeof needle === 'string') {
            return this.get(name).findBy(needle as string)
        }

        return this.get(name).find(needle as number)
    }

    public remove(name: string): void {
        delete this.groups[name]
    }

    public size(name: string): number {
        try {
            return this.get(name).items.length
        } catch {
            return 0
        }
    }

}
