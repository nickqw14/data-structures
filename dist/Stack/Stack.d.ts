interface StackInterface<T> {
    peek: () => T;
    pop: () => T;
    push: (element: T) => void;
    isEmpty: () => boolean;
    search: (element: T) => number;
    clear: () => void;
    size: () => number;
}
/**
 * Class for Stack Data Structure
 */
export declare class Stack<E> implements StackInterface<E> {
    private list;
    constructor();
    /**
     * Removes and returns the item at the top of the stack
     */
    pop(): E;
    /**
     * Adds an element to the top of the stack
     * @param element - item to be added to the top of the stack
     */
    push(element: E): void;
    /**
     * Returns the item at the top of the stack
     */
    peek(): E;
    /**
     * @returns true if stack is empty, otherwise false
     */
    isEmpty(): boolean;
    /**
     * Returns a 1 based index starting at the top of the stack. If the item is found it will return the index of the item.
     * If the item does not exist in the stack, return -1.
     *
     * @param element - element to be looked for
     * @returns index of item searched for, or -1
     */
    search(element: E): number;
    /**
     * Removes all elements from the stack
     */
    clear(): void;
    /**
     * @returns size of stack
     */
    size(): number;
}
export {};
