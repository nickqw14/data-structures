import { AdjacencyMatrixGraph } from './AdjacencyMatrix'

const users = {
    jeff: {
        id: 1,
        firstName: 'Jeff',
        lastName: 'Daniels',
        toString: function () {
            return `${this.firstName} ${this.lastName}`
        },
    },
    bill: {
        id: 2,
        firstName: 'Bill',
        lastName: 'Anderson',
        toString: function () {
            return `${this.firstName} ${this.lastName}`
        },
    },
    bob: {
        id: 3,
        firstName: 'Bob',
        lastName: 'Burnquist',
        toString: function () {
            return `${this.firstName} ${this.lastName}`
        },
    },
    carl: {
        id: 4,
        firstName: 'Carl',
        lastName: 'Mustache',
        toString: function () {
            return `${this.firstName} ${this.lastName}`
        },
    },
}
test('It inits graph with correct column sizes', () => {
    const testCount = 100
    for (let i = 1; i < testCount; i++) {
        const graph = new AdjacencyMatrixGraph(i)

        expect(graph.getEdges().length).toEqual(i)
    }
})

test('It inits graph with correct row sizes', () => {
    const testCount = 100
    for (let i = 1; i < testCount; i++) {
        const graph = new AdjacencyMatrixGraph(i)

        for (let j = 0; j < i; j++) {
            expect(graph.getEdges()[j].length).toEqual(i)
        }
    }
})

test('It dynamically increases in size', () => {
    const graph = new AdjacencyMatrixGraph(1)

    expect(graph.getEdges().length).toEqual(1)

    graph.addVertex({ id: 1, firstName: 'Bob', lastName: 'Burnquist' })
    console.log(graph.getEdges())
    expect(graph.getEdges().length).toEqual(2)

    graph.addVertex({ id: 2, firstName: 'Geoff', lastName: 'Rowley' })
    expect(graph.getEdges().length).toEqual(4)

    graph.addVertex({ id: 3, firstName: 'New Guy', lastName: 'Last' })
    graph.addVertex({ id: 4, firstName: 'Other Guy', lastName: 'Last' })

    expect(graph.getEdges().length).toEqual(8)
})

test('It dynamically increases in size', () => {
    const graph = new AdjacencyMatrixGraph<{ id: number }>(1)

    expect(graph.getEdges().length).toEqual(1)

    graph.addVertex(users.bill)
    console.log(graph.getEdges())
    expect(graph.getEdges().length).toEqual(2)

    graph.addVertex(users.carl)
    expect(graph.getEdges().length).toEqual(4)

    graph.addVertex(users.jeff)
    graph.addVertex(users.bob)

    expect(graph.getEdges().length).toEqual(8)
})

test('it adds getEdges() correctly', () => {
    const graph = new AdjacencyMatrixGraph(4)
    graph.addEdge(users.bill, users.bob)
    graph.addEdge(users.bill, users.jeff)
    graph.addEdge(users.bob, users.jeff)

    expect(graph.getEdges()[0][1]).toEqual(1)
    expect(graph.getEdges()[1][0]).toEqual(1)
    expect(graph.getEdges()[0][2]).toEqual(1)
    expect(graph.getEdges()[2][0]).toEqual(1)
})

test('It returns true when edge exists', () => {
    const graph = new AdjacencyMatrixGraph(2)

    graph.addEdge(users.bill, users.bob)

    expect(graph.hasEdge(users.bill, users.bob)).toBeTruthy()

    graph.addEdge(users.bill, users.jeff)

    expect(graph.hasEdge(users.bill, users.jeff)).toBeTruthy()
})

test('It returns false when edge does not exist', () => {
    const graph = new AdjacencyMatrixGraph(2)

    graph.addEdge(users.bill, users.bob)
    graph.addVertex(users.jeff)

    expect(graph.hasEdge(users.bill, users.jeff)).toBeFalsy()
})

test('it removes an edge successfully', () => {
    const graph = new AdjacencyMatrixGraph(2)
    graph.addEdge(users.bill, users.bob)

    graph.addEdge(users.bill, users.jeff)

    expect(graph.getEdges()[0][1]).toEqual(1)
    expect(graph.getEdges()[1][0]).toEqual(1)
    expect(graph.getEdges()[0][2]).toEqual(1)
    expect(graph.getEdges()[2][0]).toEqual(1)

    graph.removeEdge(users.bill, users.jeff)

    expect(graph.getEdges()[0][1]).toEqual(1)
    expect(graph.getEdges()[1][0]).toEqual(1)
    expect(graph.getEdges()[0][2]).toEqual(0)
    expect(graph.getEdges()[2][0]).toEqual(0)
})

test('it removes a vertex correctly', () => {
    const graph = new AdjacencyMatrixGraph(2)

    graph.addEdge(users.bill, users.bob)
    graph.addEdge(users.bill, users.jeff)

    console.log(graph.toString())

    expect(graph.hasEdge(users.bill, users.bob)).toBeTruthy()

    graph.removeVertex(users.bob)

    expect(graph.getEdges()[0][1]).toBeFalsy()
    expect(graph.getEdges()[1][0]).toBeFalsy()

    console.log(graph.toString())
})

test('it returns correct response for has vertex', () => {
    const graph = new AdjacencyMatrixGraph(2)

    graph.addVertex(users.bob)

    expect(graph.hasVertex(users.bob)).toBeTruthy()
    expect(graph.hasVertex(users.carl)).toBeFalsy()
    expect(graph.hasVertex(users.bill)).toBeFalsy()
    expect(graph.hasVertex(users.jeff)).toBeFalsy()
})

test('it returns all vertices added through edges', () => {
    const graph = new AdjacencyMatrixGraph(4)

    graph.addEdge(users.bill, users.bob)

    const vertices = graph.getVertices()

    expect(vertices.includes(users.bill)).toBeTruthy()
    expect(vertices.includes(users.bob)).toBeTruthy()
    expect(vertices.includes(users.jeff)).toBeFalsy()
})

test('it returns all vertices added singularly', () => {
    const graph = new AdjacencyMatrixGraph(4)

    graph.addVertex(users.bill)
    graph.addVertex(users.bob)

    const vertices = graph.getVertices()

    expect(vertices.includes(users.bill)).toBeTruthy()
    expect(vertices.includes(users.bob)).toBeTruthy()
    expect(vertices.includes(users.jeff)).toBeFalsy()
})
