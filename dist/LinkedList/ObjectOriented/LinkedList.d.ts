export declare class LinkedList<E> {
    private head;
    private tail;
    private size;
    constructor();
    /**
     * Adds an element to the beginining of the list and increases the size.
     * @param element - Generic Data
     */
    addFirst(element: E): void;
    /**
     * Adds an element to the end of the list and increases the size if the index param is omitted.
     * If the index is included it makes use of the insertAt helper method to insert the element at a specific position in the list
     * @param element - Generic Data
     */
    add(element: E, index?: number): void;
    /**
     * Helper method to assist the add method when an Index is passed as a param, allows insertion of an element
     * to a specific index
     * @param element - Generic Element to be Added to list
     * @param index - Index position of element insertion
     */
    private insertAt;
    /**
     * Removes and returns the last element in the List
     * @returns last element in the list
     */
    removeLast(): E | null | undefined;
    /**
     * Removes and returns the first element in the List
     * @returns first element in the list
     */
    removeFirst(): E | null | undefined;
    /**
     * Removes all items from the list and resets the size to 0.
     */
    clear(): void;
    /**
     * @returns The size of the list
     */
    getSize(): number;
    /**
     * Method to check if an element is found in the list
     * @param element - Generic Data
     * @returns True if the element param is found, false if not.
     */
    contains(element: E): any;
    /**
     * @returns 1st item in the list
     */
    getFirst(): E | null;
    /**
     * @returns The last item in the list
     */
    getLast(): E | null;
    /**
     * Returns the index position of the element param if found in the list. If no
     * such element exists return -1.
     *
     * @param element - Generic Data
     * @returns -1 or Element Index
     */
    indexOf(element: E): number;
    /**
     * @returns A string representation of the list
     */
    toString(): string;
}
