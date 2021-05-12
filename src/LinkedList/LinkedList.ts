import { LinkedListNode } from './LinkedListNode'
const deepEqual = require('deep-equal')

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
     * Adds an element to the end of the list and increases the size if the index param is omitted.
     * If the index is included it makes use of the insertAt helper method to insert the element at a specific position in the list
     * @param element - Generic Data
     */
    add(element: E, index?: number) {
        if (typeof index === 'number') {
            this.insertAt(element, index)
        } else {
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
    }

    /**
     * Helper method to assist the add method when an Index is passed as a param, allows insertion of an element
     * to a specific index
     * @param element - Generic Element to be Added to list
     * @param index - Index position of element insertion
     */
    private insertAt(element: E, index: number) {
        if (index > this.size || index < 0) {
            throw new Error('Index Out of Bounds')
        }
        if (index === 0) {
            return this.addFirst(element)
        }
        if (index === this.size) {
            return this.add(element)
        }

        let temp: LinkedListNode<E> | null = this.head
        let tempIndex = 0
        const newNode = new LinkedListNode<E>(element)
        while (temp !== null) {
            if (index === tempIndex) {
                newNode.prev = temp.prev
                newNode.next = temp
                if (temp.prev) temp.prev.next = newNode
                temp.prev = newNode
            }

            tempIndex++
            temp = temp.next
        }
        this.size++
    }

    /**
     * Removes and returns the last element in the List
     * @returns last element in the list
     */
    removeLast() {
        let element
        if (this.size === 0) {
            throw new Error('No items to Remove')
        } else if (this.size === 1) {
            element = this.head.data
            this.clear()
        } else {
            if (this.tail.prev) {
                element = this.tail.data
                this.tail = this.tail.prev
                this.tail.next = null
            }
            this.size--
        }
        return element
    }

    /**
     * Removes and returns the first element in the List
     * @returns first element in the list
     */
    removeFirst() {
        let element

        if (this.size === 0) {
            throw new Error('No items to remove')
        } else if (this.size === 1) {
            element = this.head.data
            this.clear()
        } else {
            if (this.head.next) {
                element = this.head.data
                this.head = this.head.next
                this.head.prev = null
            }
            this.size--
        }
        return element
    }

    remove(index?: number) {
        if (typeof index === 'number') {
            if (index > this.size || index < 0) {
                throw new Error('Index out of bounds')
            }
            if (index === 0) {
                return this.removeFirst()
            }
            if (index === this.size) {
                return this.removeLast()
            }

            let temp: LinkedListNode<E> | null = this.head
            let tempIndex = 0
            let element: LinkedListNode<E> | null = null

            while (temp !== null) {
                if (index === tempIndex) {
                    if (temp.prev && temp.next) {
                        element = temp
                        temp.prev.next = element.next
                        temp.next.prev = element.prev
                        break
                    }
                }
                tempIndex++
                temp = temp.next
            }
            this.size--
            return element?.data
        } else {
            return this.removeLast()
        }
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
     * @param element - Generic Data
     * @returns True if the element param is found, false if not.
     */
    contains(element: E) {
        let temp = this.head

        while (temp.next !== null) {
            if (typeof temp.data === 'object') {
                return deepEqual(element, temp.data)
            } else if (element === temp.data) {
                return true
            } else {
                temp = temp.next
            }
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
        let temp: LinkedListNode<E> | null = this.head
        let index = 0

        while (temp !== null) {
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
        if (this.size === 0) {
            return '[]'
        }
        let temp: LinkedListNode<E> | null = this.head
        let str = '[ '

        while (temp !== null) {
            if (temp === this.tail) {
                str += temp.data + ' ]'
            } else {
                str += temp.data + ' <-> '
            }
            temp = temp.next
        }
        return str
    }
}
