import { LinkedList } from '../LinkedList/LinkedList'

interface QueueInterface<T> {
    enqueue: (element: T) => void
    dequeue: () => T
    size: () => number
    clear: () => void
    peek: () => T
}
/**
 * Class for Queue Data Structure
 */
export class Queue<E> implements QueueInterface<E> {
    private list: LinkedList<E>

    constructor() {
        this.list = new LinkedList<E>()
    }

    /**
     * Adds the element to the back of the Queue
     * @param element
     */
    enqueue(element: E) {
        this.list.add(element)
    }

    /**
     * Removes & returns the first element in the Queue
     */
    dequeue() {
        return this.list.removeFirst()
    }

    /**
     * @returns the size of the Queue
     */
    size() {
        return this.list.getSize()
    }

    /**
     * Removes all items in the Queue
     */
    clear() {
        this.list.clear()
    }

    /**
     * @returns the first item in the Queue
     */
    peek() {
        return this.list.getFirst()
    }
}
