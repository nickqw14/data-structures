interface QueueInterface<T> {
    enqueue: (element: T) => void;
    dequeue: () => T;
    size: () => number;
    clear: () => void;
    peek: () => T;
    addAll: (list: T[]) => void;
}
/**
 * Class for Queue Data Structure
 */
export declare class Queue<E> implements QueueInterface<E> {
    private list;
    /** Constructor */
    constructor();
    /**
     * Adds the element to the back of the Queue
     * @param element
     */
    enqueue(element: E): void;
    /**
     * Removes & returns the first element in the Queue
     */
    dequeue(): E;
    /**
     * @returns the size of the Queue
     */
    size(): number;
    /**
     * Removes all items in the Queue
     */
    clear(): void;
    /**
     * @returns the first item in the Queue
     */
    peek(): E;
    /**
     * Adds all items to Queue from an existing array
     *
     * @param list
     */
    addAll(list: E[]): void;
}
export {};
