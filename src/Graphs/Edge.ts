import { GraphNode } from './GraphNode'

export class Edge<T> {
    u: GraphNode<T>
    v: GraphNode<T>

    constructor(u: GraphNode<T>, v: GraphNode<T>) {
        this.u = u
        this.v = v
    }
}
