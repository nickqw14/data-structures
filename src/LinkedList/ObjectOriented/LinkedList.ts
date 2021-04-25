import { LinkedListNode } from '../ObjectOriented/LinkedListNode'
export class LinkedList<T> {
    private head: LinkedListNode<T> | null
    private tail: LinkedListNode<T> | null
    private size: number

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    /**
     *
     * @param data
     */
    addFirst(data: T) {
        const newNode = new LinkedListNode<T>(data)
        if (this.head === null) {
            this.head = newNode
        } else if (this.tail === null) {
            newNode.prev = this.tail
            newNode.next = this.head
            this.tail = this.head
            this.head = newNode
        } else {
            newNode.prev = this.tail
            newNode.next = this.head
            this.head = newNode
            this.tail.next = this.head
        }
        this.size++
    }

    addLast(data: T) {
        if (this.head === null) {
            return this.addFirst(data)
        } else {
            const newNode = new LinkedListNode<T>(data)
            if (this.tail === null) {
                this.tail = newNode
                this.tail.next = this.head
                this.head.next = this.tail
                this.head.prev = this.tail
            } else {
                newNode.next = this.head
                newNode.prev = this.tail
                this.tail = newNode
                this.head.next = newNode
            }
        }
        this.size++
    }

    add(index: number, data: T) {
        let counter = 0
        let temp = this.head
        const newNode = new LinkedListNode<T>(data)

        if (index > this.size - 1 || index < 0) {
            throw new Error('Index out of bounds')
        }
        if (index === 0) {
            return this.addFirst(data)
        }
        if (index === this.size - 1) {
            return this.addLast(data)
        }
        let currentNode = this.head

        while (counter < index && temp !== null) {
            currentNode = currentNode && currentNode.next
            counter++
        }
        newNode.prev = currentNode
        newNode.next = currentNode && currentNode.next
        currentNode = newNode

        this.size++
    }

    getSize() {
        return this.size
    }

    clear() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    remove(): T | null {
        if (this.tail === null) {
            const temp = this.head
            this.head = null
            this.size--
            return temp ? temp.data : null
        } else {
            const temp = this.tail
            this.tail = this.tail.prev
            this.tail && (this.tail.next = this.head)
            this.size--
            return temp ? temp.data : null
        }
    }

    toString() {
        let str = ''
        let currentNode = this.head
        let counter = 0
        while (counter < this.size - 1) {
            str += currentNode ? currentNode.data : ''
            currentNode = currentNode && currentNode.next
            counter++
        }
        return (str += this.tail ? this.tail.data : '')
    }
}
