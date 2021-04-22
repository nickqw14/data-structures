import { LinkedListNode } from '../ObjectOriented/LinkedListNode'
export class LinkedList<T> {
    private head: LinkedListNode<T> | null
    private size: number

    constructor() {
        this.head = null
        this.size = 0
    }

    /**
     *
     * @param data
     */
    addFirst(data: T) {
        if (this.head === null) {
            this.head = new LinkedListNode<T>(data)
        } else {
            const newNode = new LinkedListNode<T>(data)
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    add(data: T) {
        if (this.head === null) {
            this.addFirst(data)
        } else {
            let currentNode: LinkedListNode<T> | null = this.head
            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }

            currentNode.next = new LinkedListNode<T>(data)
        }
        this.size++
    }

    getSize() {
        return this.size
    }
}
