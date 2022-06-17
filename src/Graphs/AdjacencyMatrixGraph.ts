import { GraphNode } from './GraphNode'

/**
 * A -> B, C
 * B -> C
 * C
 */

//   A B C
// A 0 1 1
// B 0 0 1
// C 0 0 0

//      A          B           C
// [[0, 1, 1], [0, 0, 1] , [0, 0, 0]]
export class AdjacencyMatrixGraph<T> {
    private edges: number[][]
    private nodes: GraphNode<T>[]

    constructor() {
        this.edges = []
        this.nodes = []
    }

    public initializeGraph(size: number) {
        const newEdges = Array(size).fill(0)
        for (let i = 0; i < size; i++) {
            this.edges.push(newEdges)
        }
    }

    private increaseSize(size: number) {
        if (this.edges.length !== 0) {
            // Increase existing edges
            for (let i = 0; i < this.edges.length; i++) {
                for (let j = 0; j < size; j++) {
                    this.edges[i].push(0)
                }
            }
            // Create new Edges
            const newEdges = Array(this.edges.length + 1).fill(0)
            for (let i = 0; i < size; i++) {
                this.edges.push(newEdges)
            }
        } else {
            this.initializeGraph(size)
        }
    }

    public clear() {
        this.edges = []
        this.nodes = []
    }

    addNode(node: GraphNode<T>) {
        this.nodes.push(node)
        this.increaseSize(1)
    }

    addEdge(source: GraphNode<T>, destination: GraphNode<T>, weight?: number) {
        if (source.index === -1) {
            this.addNode(source)
            source.setIndex(this.edges.length - 1)
        }
        if (destination.index === -1) {
            this.addNode(destination)
            destination.setIndex(this.edges.length - 1)
        }
        this.edges[source.index][destination.index] = weight ?? 1
    }

    removeEdge(source: GraphNode<T>, destination: GraphNode<T>) {
        if (
            !source.index ||
            !destination.index ||
            !this.edges[source.index] ||
            !this.edges[destination.index]
        ) {
            throw new Error('No edge found with those sources')
        }
        this.edges[source.index][destination.index] = 0
    }

    getNodes() {
        return this.nodes
    }

    getNode(index: number) {
        return this.nodes[index]
    }

    getEdges() {
        return this.edges
    }
}
