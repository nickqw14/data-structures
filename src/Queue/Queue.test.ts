import { Queue } from './Queue'

let queueOfStrings = new Queue<string>()

beforeEach(() => {
    queueOfStrings.enqueue('five')
    queueOfStrings.enqueue('four')
    queueOfStrings.enqueue('three')
    queueOfStrings.enqueue('two')
    queueOfStrings.enqueue('one')
})

afterEach(() => {
    queueOfStrings.clear()
})

test('Enque method', () => {
    queueOfStrings.clear()
    queueOfStrings.enqueue('one')
    expect(queueOfStrings.size()).toBe(1)
})

test('Dequeue method', () => {
    expect(queueOfStrings.dequeue()).toBe('five')
    expect(queueOfStrings.size()).toBe(4)
})

test('Peek method', () => {
    expect(queueOfStrings.peek()).toBe('five')
    queueOfStrings.dequeue()
    expect(queueOfStrings.peek()).toBe('four')
    queueOfStrings.dequeue()
    expect(queueOfStrings.peek()).toBe('three')
    queueOfStrings.dequeue()
    expect(queueOfStrings.peek()).toBe('two')
    queueOfStrings.dequeue()
    expect(queueOfStrings.peek()).toBe('one')
})

test('Add all items to Queue', () => {
    const q = new Queue<number>()
    const arr = [1, 2, 3, 4]
    q.addAll(arr)

    expect(q.dequeue()).toBe(1)
    expect(q.size()).toBe(3)
    expect(q.dequeue()).toBe(2)
    expect(q.size()).toBe(2)
    expect(q.dequeue()).toBe(3)
    expect(q.size()).toBe(1)
    expect(q.dequeue()).toBe(4)
    expect(q.size()).toBe(0)
})
