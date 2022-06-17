import { AdjacencyMatrixGraph } from './AdjacencyMatrixGraph'
import { GraphNode } from './GraphNode'
// import { GraphNode } from './GraphNode'

let directedGraph = new AdjacencyMatrixGraph()

afterEach(() => {
    directedGraph.clear()
})

test('it initializes correctly', () => {
    const directedGraph = new AdjacencyMatrixGraph()

    directedGraph.initializeGraph(1)
    expect(directedGraph.getEdges()).toEqual([[0]])
    directedGraph.clear()

    directedGraph.initializeGraph(2)
    expect(directedGraph.getEdges()).toEqual([
        [0, 0],
        [0, 0],
    ])
    directedGraph.clear()

    directedGraph.initializeGraph(3)
    expect(directedGraph.getEdges()).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ])
    directedGraph.clear()

    directedGraph.initializeGraph(4)
    expect(directedGraph.getEdges()).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ])
    directedGraph.clear()

    directedGraph.initializeGraph(5)
    expect(directedGraph.getEdges()).toEqual([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ])
    directedGraph.clear()
})

test('it adds an edge correctly', () => {
    const testUser = { firstName: 'Nick', lastName: 'Weaver' }

    const nodeOne = new GraphNode(testUser)
    const nodeTwo = new GraphNode(testUser)

    directedGraph.addEdge(nodeOne, nodeTwo)

    expect(nodeOne.index).toBe(0)
    expect(nodeTwo.index).toBe(1)
    expect(directedGraph.getEdges()).toEqual([
        [0, 1],
        [0, 0],
    ])
})

test('it updates an edge correctly', () => {
    const testUser = { firstName: 'Nick', lastName: 'Weaver' }

    const nodeOne = new GraphNode(testUser)
    const nodeTwo = new GraphNode(testUser)

    directedGraph.addEdge(nodeOne, nodeTwo)
    expect(directedGraph.getEdges()).toEqual([
        [0, 1],
        [0, 0],
    ])
    directedGraph.addEdge(nodeTwo, nodeOne)
    expect(directedGraph.getEdges()).toEqual([
        [0, 1],
        [1, 0],
    ])
})

test('it adds nodes correctly when edges are created with new nodes', () => {
    const testUser = { firstName: 'Nick', lastName: 'Weaver' }

    const nodeOne = new GraphNode(testUser)
    const nodeTwo = new GraphNode(testUser)
    const nodeThree = new GraphNode(testUser)
    const nodeFour = new GraphNode(testUser)

    directedGraph.addEdge(nodeOne, nodeTwo)
    directedGraph.addEdge(nodeThree, nodeFour)
    const correctIndices = directedGraph.getNodes().map((node) => node.index)

    expect(correctIndices).toEqual([0, 1, 2, 3])
})
