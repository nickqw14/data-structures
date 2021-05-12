import { Stack } from './Stack'

let stackOfStrings = new Stack<string>()

beforeEach(() => {
    stackOfStrings.push('five')
    stackOfStrings.push('four')
    stackOfStrings.push('three')
    stackOfStrings.push('two')
    stackOfStrings.push('one')
})

afterEach(() => {
    stackOfStrings.clear()
})

test('Push method', () => {
    stackOfStrings.push('six')
    expect(stackOfStrings.peek()).toBe('six')
    expect(stackOfStrings.size()).toBe(6)
})

test('Pop method', () => {
    expect(stackOfStrings.pop()).toBe('one')
    expect(stackOfStrings.size()).toBe(4)
})

test('isEmpty method when stack is not empty', () => {
    expect(stackOfStrings.isEmpty()).toBeFalsy()
})

test('isEmpty method when stack is empty', () => {
    stackOfStrings.clear()
    expect(stackOfStrings.isEmpty()).toBeTruthy()
})

test('Clear method', () => {
    expect(stackOfStrings.size()).toBe(5)
    stackOfStrings.clear()
    expect(stackOfStrings.size()).toBe(0)
})

test('Search method, correct index', () => {
    expect(stackOfStrings.search('three')).toBe(3)
})

test('Search method, no index found', () => {
    expect(stackOfStrings.search('fifteen')).toBe(-1)
})
