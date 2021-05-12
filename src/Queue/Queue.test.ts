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
