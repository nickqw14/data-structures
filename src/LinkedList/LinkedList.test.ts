import { LinkedList } from './LinkedList'

let strLinkedList = new LinkedList<string>()

beforeEach(() => {
    strLinkedList.add('one')
    strLinkedList.add('two')
    strLinkedList.add('three')
    strLinkedList.add('four')
    strLinkedList.add('five')
})

afterEach(() => {
    strLinkedList.clear()
})

test('Remove first method', () => {
    expect(strLinkedList.removeFirst()).toBe('one')
    expect(strLinkedList.getSize()).toBe(4)
    expect(strLinkedList.getFirst()).toBe('two')
    expect(strLinkedList.getLast()).toBe('five')
})

test('Remove last method', () => {
    expect(strLinkedList.removeLast()).toBe('five')
    expect(strLinkedList.getSize()).toBe(4)
    expect(strLinkedList.getFirst()).toBe('one')
    expect(strLinkedList.getLast()).toBe('four')
})

test('Get first method', () => {
    expect(strLinkedList.getFirst()).toBe('one')
    expect(strLinkedList.getSize()).toBe(5)
})

test('Get last method', () => {
    expect(strLinkedList.getLast()).toBe('five')
    expect(strLinkedList.getSize()).toBe(5)
})

test('Add first method', () => {
    strLinkedList.addFirst('six')
    expect(strLinkedList.getLast()).toBe('five')
    expect(strLinkedList.getFirst()).toBe('six')
    expect(strLinkedList.getSize()).toBe(6)
})

test('Add method - No Index', () => {
    strLinkedList.add('six')
    expect(strLinkedList.getLast()).toBe('six')
    expect(strLinkedList.getSize()).toBe(6)
})

test('Add method Index', () => {
    strLinkedList.add('six', 3)
    expect(strLinkedList.getLast()).toBe('five')
    expect(strLinkedList.getFirst()).toBe('one')
    expect(strLinkedList.getSize()).toBe(6)
    expect(strLinkedList.contains('six')).toBeTruthy()
})

test('Contains Method returns True', () => {
    expect(strLinkedList.contains('one')).toBeTruthy()
})

test('Contains Method returns False', () => {
    expect(strLinkedList.contains('seven')).toBeFalsy()
})

test('Remove method with Index', () => {
    expect(strLinkedList.remove(2)).toBe('three')
    expect(strLinkedList.getSize()).toBe(4)
    expect(strLinkedList.contains('three')).toBeFalsy()
})

test('Remove method without Index', () => {
    expect(strLinkedList.remove()).toBe('five')
    expect(strLinkedList.getSize()).toBe(4)
    expect(strLinkedList.contains('five')).toBeFalsy()
})
