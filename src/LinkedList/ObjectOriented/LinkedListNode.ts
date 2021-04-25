export class LinkedListNode<T> {
    data: T | null
    next: LinkedListNode<T> | null
    prev: LinkedListNode<T> | null

    constructor(
        data: T | null,
        next?: LinkedListNode<T> | null,
        prev?: LinkedListNode<T>
    ) {
        this.data = data ? data : null
        this.next = next ? next : null
        this.prev = prev ? prev : null
    }
}
