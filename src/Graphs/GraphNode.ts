export class GraphNode<T> {
    private data: T | null = null
    index: number

    constructor(data: T) {
        this.data = data
        this.index = -1 // Represents the index not being set yet
    }

    setIndex(index: number) {
        this.index = index
    }

    setData(data: T) {
        this.data = data
    }

    getData() {
        return this.data
    }
}
