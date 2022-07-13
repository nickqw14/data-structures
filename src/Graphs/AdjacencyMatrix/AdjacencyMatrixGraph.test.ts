import { AdjacencyMatrixGraph } from './AdjacencyMatrixGraph'

test('it initializes the matrix correctly', () => {
    const twoByTwo = new AdjacencyMatrixGraph(2)
    const threeByThree = new AdjacencyMatrixGraph(3)
    const fourByFour = new AdjacencyMatrixGraph(4)

    expect(twoByTwo.getMatrix()).toEqual([
        [0, 0],
        [0, 0],
    ])
    expect(threeByThree.getMatrix()).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ])
    expect(fourByFour.getMatrix()).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ])
})

test('it adds an edge correctly', () => {
    const graph = new AdjacencyMatrixGraph(2)

    graph.addEdge(0, 1)
    graph.addEdge(1, 0)

    expect(graph.getMatrix()).toEqual([
        [0, 1],
        [1, 0],
    ])
})

test('it throws when you try to connect the same vertex', () => {
    const graph = new AdjacencyMatrixGraph(2)
    expect(() => graph.addEdge(0, 0)).toThrowError()
})

test('it throws when you try to remove an edge that does not exists', () => {
    const graph = new AdjacencyMatrixGraph(3)
    graph.addEdge(0, 1)
    expect(() => graph.removeEdge(1, 2)).toThrowError()
})
