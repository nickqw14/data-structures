export declare class LinkedListNode<T> {
    data: T | null;
    next: LinkedListNode<T> | null;
    prev: LinkedListNode<T> | null;
    constructor(data: T | null, next?: LinkedListNode<T> | null, prev?: LinkedListNode<T> | null);
}
