import { LinkedList } from '../LinkedList/LinkedList'

/**
 * Class for Stack Data Structure
 */
export class Stack<E> {
    private list: LinkedList<E>

    constructor() {
        this.list = new LinkedList<E>()
    }

    /**
     * Removes and returns the item at the top of the stack
     */
    pop() {
        return this.list.removeFirst()
    }

    /**
     * Adds an element to the top of the stack
     * @param element - item to be added to the top of the stack
     */
    push(element: E) {
        this.list.addFirst(element)
    }

    /**
     * Returns the item at the top of the stack
     */
    peek() {
        return this.list.getFirst()
    }

    /**
     * @returns true if stack is empty, otherwise false
     */
    isEmpty() {
        this.list.isEmpty()
    }

    /**
     * Returns a 1 based index starting at the top of the stack. If the item is found it will return the index of the item.
     * If the item does not exist in the stack, return -1.
     *
     * @param element - element to be looked for
     * @returns index of item searched for, or -1
     */
    search(element: E) {
        if (this.list.indexOf(element) === -1) {
            return -1
        }
        return this.list.indexOf(element) + 1
    }
}
