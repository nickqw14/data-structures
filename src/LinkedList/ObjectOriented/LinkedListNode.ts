export class LinkedListNode<T> {
    data: T | null
    next: LinkedListNode<T> | null

    constructor(data: T | null, next?: LinkedListNode<T> | null) {
        this.data = data ? data : null
        this.next = next ? next : null
    }
}
