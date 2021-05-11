import { LinkedListNode } from '../ObjectOriented/LinkedListNode'
export class LinkedList<E> {
    private head: LinkedListNode<E>
    private tail: LinkedListNode<E>
    private size: number

    constructor() {
        this.head = new LinkedListNode<E>(null)
        this.tail = new LinkedListNode<E>(null)
        this.size = 0
    }

    /**
     * Adds an element to the beginining of the list and increases the size.
     *
     * @param element - Generic Data
     */
    addFirst(element: E) {
        if (this.size === 0) {
            this.head = new LinkedListNode<E>(element, this.tail)
        } else if (this.size === 1) {
            this.tail = this.head
            this.head = new LinkedListNode<E>(element, this.tail)
            this.tail.prev = this.head
        } else {
            const newNode = new LinkedListNode<E>(element, this.head)
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
    }

    /**
     * Adds an element to the end of the list and increases the size.
     *
     * @param element - Generic Data
     */
    add(element: E) {
        if (this.size === 0) {
            this.head = new LinkedListNode<E>(element, this.tail)
        } else if (this.size === 1) {
            this.tail = new LinkedListNode<E>(element, null, this.head)
            this.head.next = this.tail
        } else {
            const newNode = new LinkedListNode<E>(element, null, this.tail)
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    /**
     * Removes all items from the list and resets the size to 0.
     */
    clear() {
        this.head = new LinkedListNode<E>(null)
        this.tail = new LinkedListNode<E>(null)
        this.size = 0
    }

    /**
     * @returns The size of the list
     */
    getSize() {
        return this.size
    }

    /**
     * Method to check if an element is found in the list
     *
     * @param element - Generic Data
     * @returns True if the element param is found, false if not.
     */
    contains(element: E) {
        let temp = this.head

        while (temp.next !== null) {
            if (element === temp.data) {
                return true
            }
            temp = temp.next
        }

        return false
    }

    /**
     * @returns 1st item in the list
     */
    getFirst() {
        return this.head.data
    }

    /**
     * @returns The last item in the list
     */
    getLast() {
        return this.tail.data
    }

    /**
     * Returns the index position of the element param if found in the list. If no
     * such element exists return -1.
     *
     * @param element - Generic Data
     * @returns -1 or Element Index
     */
    indexOf(element: E) {
        let temp = this.head
        let index = 0

        while (temp.next !== null) {
            if (temp.data === element) {
                return index
            }
            index++
            temp = temp.next
        }
        return -1
    }

    /**
     * @returns A string representation of the list
     */
    toString() {
        let temp = this.head
        let str = '[ '

        while (temp.next !== null) {
            if (temp === this.tail) {
                str += temp.data + ' ]'
            } else {
                str += temp.data + ' --> '
            }
            temp = temp.next
        }
        return str
    }
}
