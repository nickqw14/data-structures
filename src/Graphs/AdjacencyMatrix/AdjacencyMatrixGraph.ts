//   A B C
// A 0 1 1
// B 0 0 1
// C 0 0 0

//      A          B           C
// [[0, 1, 1], [0, 0, 1] , [0, 0, 0]]
export class AdjacencyMatrixGraph {
    private matrix: number[][]
    size: number

    constructor(size: number) {
        this.size = size
        this.initializeMatrix()
    }

    initializeMatrix() {
        const size = this.size
        this.matrix = []
        for (let i = 0; i < size; i++) {
            this.matrix.push([])
            for (let j = 0; j < size; j++) {
                this.matrix[i].push(0)
            }
        }
    }

    clear() {
        this.initializeMatrix()
    }

    addEdge(source: number, destination: number, weight?: number) {
        if (source === destination) {
            throw Error("You can't connect the same vertices")
        }
        this.matrix[source][destination] = weight ?? 1
        this.matrix[destination][source] = weight ?? 1
    }

    removeEdge(source: number, destination: number) {
        if (this.matrix[source][destination] === 0) {
            throw Error(`There is no edge between ${source} and ${destination}`)
        }
        this.matrix[source][destination] = 0
        this.matrix[destination][source] = 0
    }

    getMatrix() {
        return this.matrix
    }
}
