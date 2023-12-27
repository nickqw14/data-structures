type Vertex<T> = { node: T; index: number }

/**
 * An Undirected Graph, accepts Generic Nodes and utilizes an Adjacency Matrix as the Backing
 * store
 */
export class AdjacencyMatrixGraph<T extends object> {
    private edges: number[][]
    private indexMapping: Map<T, number>

    constructor(size: number) {
        this.edges = []
        this.indexMapping = new Map()

        this.intitializeGraph(size)
    }

    private intitializeGraph(size: number) {
        for (let i = 0; i < size; i++) {
            const row = Array(size).fill(0)
            this.edges.push(row)
        }
    }

    /**
     * Accepts the new size and increases the adjacency matrix backing store to that size and initializes
     * with no edges between vertices that don't exist
     *
     * @param newSize Number representing how big you want the Adjacency Matrix to be increased to
     */
    private increaseSize(newSize: number) {
        const priorSize = this.edges.length

        if (newSize < priorSize)
            throw new Error(
                'The new size cannot be less than the previous matrix size'
            )
        // Adds new columns
        for (let i = 0; i < priorSize; i++) {
            // We only need to add columns that are missing
            for (let j = 0; j < newSize - priorSize; j++) {
                this.edges[i].push(0)
            }
        }

        // Adds new Rows
        for (let i = 0; i < newSize - priorSize; i++) {
            const row = Array(newSize).fill(0)
            this.edges.push(row)
        }
    }

    /**
     * Looks for an existing vertex, if it exists returns it otherwise creates and returns it
     * @param v Vertex to get or Create
     * @returns
     */
    private getOrCreateVertex(v: T): Vertex<T> {
        const vIndex = this.indexMapping.get(v)

        if (typeof vIndex !== 'number') {
            return this.addVertex(v)
        }

        return { node: v, index: vIndex }
    }

    /**
     * Adds a new Vertex to the Graph
     * @param node Data stored in the Vertex
     * @returns
     */
    public addVertex(node: T): Vertex<T> {
        const index = this.indexMapping.size
        this.indexMapping.set(node, index)
        const vertexSlots = this.edges.length

        if (vertexSlots === this.indexMapping.size) {
            this.increaseSize(this.edges.length * 2)
        }

        return { node, index }
    }

    /**
     * Connects two Vertices by Creating an Edge between them.
     * @param v1 Source Node/Vertex
     * @param v2 Destination Node/Vertex
     */
    public addEdge(v1: T, v2: T) {
        let v1Index = this.getOrCreateVertex(v1).index
        let v2Index = this.getOrCreateVertex(v2).index

        if (typeof v1Index !== 'number') {
            v1Index = this.addVertex(v1).index
        }

        if (typeof v2Index !== 'number') {
            v2Index = this.addVertex(v2).index
        }

        this.edges[v1Index][v2Index] = 1
        this.edges[v2Index][v1Index] = 1
    }

    /**
     * Removes an Edge between two Vertices
     * @param v1 Source Node
     * @param v2 Destination Node
     */
    public removeEdge(v1: T, v2: T) {
        let v1Index = this.getOrCreateVertex(v1).index
        let v2Index = this.getOrCreateVertex(v2).index

        this.edges[v1Index][v2Index] = 0
        this.edges[v2Index][v1Index] = 0
    }

    /**
     * Removes a Vertex and all Edges that pointed to that Vertex
     * @param v Vertex to Delete
     */
    public removeVertex(v: T) {
        const deletedVertexIndex = this.indexMapping.get(v)

        if (typeof deletedVertexIndex !== 'number')
            throw new Error('The vertex supplied does not exist')

        this.indexMapping.delete(v)

        // Reset the Row
        const row = this.edges[deletedVertexIndex]
        for (let i = 0; i < row.length; i++) {
            row[i] = 0
        }

        // Reset the Column
        for (let i = 0; i < this.edges.length; i++) {
            this.edges[i][deletedVertexIndex] = 0
        }
    }

    /**
     * Returns true or false if an Edge exists
     * @param v1 Source Node
     * @param v2 Destination Node
     * @returns
     */
    public hasEdge(v1: T, v2: T) {
        const v1Index = this.indexMapping.get(v1)
        const v2Index = this.indexMapping.get(v2)

        if (typeof v1Index !== 'number')
            throw new Error('Vertex 1 does not exist')
        if (typeof v2Index !== 'number')
            throw new Error('Vertex 2 does not exist')

        const edge = this.edges[v1Index][v2Index]

        return edge === 0 ? false : true
    }

    /**
     * Returns true/false if a vertex exists or not
     *
     * @param v Vertex to lookup
     * @returns True/False based on vertex existence
     */
    public hasVertex(v: T) {
        return this.indexMapping.has(v)
    }

    /**
     * Returns the edges
     * @returns Adjacency Matrix (2D Array) representing edges
     */
    public getEdges() {
        return this.edges
    }

    /**
     * Returns all the vertices
     * @returns All Vertices on the Graph
     */
    public getVertices(): T[] {
        let vertices = []

        for (let node of this.indexMapping.keys()) {
            vertices.push(node)
        }

        return vertices
    }

    /** This was hacked together quite quickly with no performance considered */
    public toString() {
        let str = ''
        for (let [node, index] of this.indexMapping.entries()) {
            const connections = this.edges[index]

            const vertices = connections
                .map((vertex, index) => (vertex !== 0 ? index : -1))
                .filter((v) => v !== -1)

            let nodes = ''

            for (let [n, i] of this.indexMapping.entries()) {
                const match = vertices.find((v) => v === i)
                if (typeof match === 'number') {
                    nodes += `${n.toString()}, `
                }
            }
            const edges = `${node.toString()}: { ${nodes.trim()} }`
            str += `${edges} \n`
        }
        return str
    }
}
