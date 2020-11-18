export default class LightboxGroup {

    public groups: LightboxListGroup = {}

    public all(): LightboxListGroup {
        return this.groups
    }

    public has(name: string): boolean {
        return this.groups[name] !== undefined
    }

    public create(name: string): void {
        if (!this.has(name)) {
            this.groups[name] = []
        }
    }

    public addTo(name: string, item: LightboxListItem): LightboxListItem {
        if (!this.groups[name]) {
            this.create(name)
        }

        this.groups[name].push(item)

        return item
    }

    public retrieve(name: string, index: number): LightboxListItem|null {
        return this.groups[name][index] || null
    }

    public size(name: string): number {
        try {
            return this.groups[name].length
        } catch {
            return 0
        }
    }

}
