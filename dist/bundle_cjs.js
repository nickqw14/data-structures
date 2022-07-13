'use strict';

var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data, next, prev) {
        this.data = data ? data : null;
        this.next = next ? next : null;
        this.prev = prev ? prev : null;
    }
    return LinkedListNode;
}());

var deepEqual = require('deep-equal');
/**
 * Class for Generic LinkedList Data Structure
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = new LinkedListNode(null);
        this.tail = new LinkedListNode(null);
        this.size = 0;
    }
    /**
     * Adds an element to the beginining of the list and increases the size.
     * @param element - Generic Data
     */
    LinkedList.prototype.addFirst = function (element) {
        if (this.size === 0) {
            this.head = new LinkedListNode(element, this.tail);
        }
        else if (this.size === 1) {
            this.tail = this.head;
            this.head = new LinkedListNode(element, this.tail);
            this.tail.prev = this.head;
        }
        else {
            var newNode = new LinkedListNode(element, this.head);
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    };
    /**
     * Adds an element to the end of the list and increases the size if the index param is omitted.
     * If the index is included it makes use of the insertAt helper method to insert the element at a specific position in the list
     * @param element - Generic Data
     */
    LinkedList.prototype.add = function (element, index) {
        if (typeof index === 'number') {
            this.insertAt(element, index);
        }
        else {
            if (this.size === 0) {
                this.head = new LinkedListNode(element, this.tail);
            }
            else if (this.size === 1) {
                this.tail = new LinkedListNode(element, null, this.head);
                this.head.next = this.tail;
            }
            else {
                var newNode = new LinkedListNode(element, null, this.tail);
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.size++;
        }
    };
    /**
     * Helper method to assist the add method when an Index is passed as a param, allows insertion of an element
     * to a specific index
     * @param element - Generic Element to be Added to list
     * @param index - Index position of element insertion
     */
    LinkedList.prototype.insertAt = function (element, index) {
        if (index > this.size || index < 0) {
            throw new Error('Index Out of Bounds');
        }
        if (index === 0) {
            return this.addFirst(element);
        }
        if (index === this.size) {
            return this.add(element);
        }
        var temp = this.head;
        var tempIndex = 0;
        var newNode = new LinkedListNode(element);
        while (temp !== null) {
            if (index === tempIndex) {
                newNode.prev = temp.prev;
                newNode.next = temp;
                if (temp.prev)
                    temp.prev.next = newNode;
                temp.prev = newNode;
            }
            tempIndex++;
            temp = temp.next;
        }
        this.size++;
    };
    /**
     * Removes and returns the last element in the List
     * @returns last element in the list
     */
    LinkedList.prototype.removeLast = function () {
        var element;
        if (this.size === 0) {
            throw new Error('No items to Remove');
        }
        else if (this.size === 1 && this.head.data !== null) {
            element = this.head.data;
            this.clear();
        }
        else {
            if (this.tail.prev && this.tail.data !== null) {
                element = this.tail.data;
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            this.size--;
        }
        return element;
    };
    /**
     * Removes and returns the first element in the List
     * @returns first element in the list
     */
    LinkedList.prototype.removeFirst = function () {
        var element;
        if (this.head.data === null) {
            throw new Error('No items to remove');
        }
        else if (this.size === 1 && this.head.data !== null) {
            element = this.head.data;
            this.clear();
        }
        else {
            element = this.head.data;
            if (this.head.next) {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.size--;
        }
        return element;
    };
    /**
     * If no index is provided the last item in the list is removed, otherwise the item in the index position of the
     * index param is the item to be removed and returned
     *
     * @param index - Index of item to be removed
     * @return element that has been removed
     */
    LinkedList.prototype.remove = function (index) {
        if (typeof index === 'number') {
            if (index > this.size || index < 0) {
                throw new Error('Index out of bounds');
            }
            if (index === 0) {
                return this.removeFirst();
            }
            if (index === this.size) {
                return this.removeLast();
            }
            var temp = this.head;
            var tempIndex = 0;
            var element = null;
            while (temp !== null) {
                if (index === tempIndex) {
                    if (temp.prev && temp.next) {
                        element = temp;
                        temp.prev.next = element.next;
                        temp.next.prev = element.prev;
                        break;
                    }
                }
                tempIndex++;
                temp = temp.next;
            }
            this.size--;
            return (element === null || element === void 0 ? void 0 : element.data) ? element.data : undefined;
        }
        else {
            return this.removeLast();
        }
    };
    /**
     * Removes all items from the list and resets the size to 0.
     */
    LinkedList.prototype.clear = function () {
        this.head = new LinkedListNode(null);
        this.tail = new LinkedListNode(null);
        this.size = 0;
    };
    /**
     * @returns The size of the list
     */
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    /**
     * Method to check if an element is found in the list
     * @param element - Generic Data
     * @returns True if the element param is found, false if not.
     */
    LinkedList.prototype.contains = function (element) {
        var temp = this.head;
        while (temp.next !== null) {
            if (typeof temp.data === 'object') {
                return deepEqual(element, temp.data);
            }
            else if (element === temp.data) {
                return true;
            }
            else {
                temp = temp.next;
            }
        }
        return false;
    };
    /**
     * @returns 1st item in the list
     */
    LinkedList.prototype.getFirst = function () {
        if (this.head.data === null) {
            throw new Error('No such element');
        }
        return this.head.data;
    };
    /**
     * @returns The last item in the list
     */
    LinkedList.prototype.getLast = function () {
        if (this.tail.data === null) {
            throw new Error('No such element');
        }
        return this.tail.data;
    };
    /**
     * Returns the index position of the element param if found in the list. If no
     * such element exists return -1.
     *
     * @param element - Generic Data
     * @returns -1 or Element Index
     */
    LinkedList.prototype.indexOf = function (element) {
        var temp = this.head;
        var index = 0;
        while (temp !== null) {
            if (temp.data === element) {
                return index;
            }
            index++;
            temp = temp.next;
        }
        return -1;
    };
    /**
     * @return true or false if the list is empty or not
     */
    LinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    /**
     * @returns A string representation of the list
     */
    LinkedList.prototype.toString = function () {
        if (this.size === 0) {
            return '[]';
        }
        var temp = this.head;
        var str = '[ ';
        while (temp !== null) {
            if (temp === this.tail) {
                str += temp.data + ' ]';
            }
            else {
                str += temp.data + ' <-> ';
            }
            temp = temp.next;
        }
        return str;
    };
    return LinkedList;
}());

var myList = new LinkedList();
myList.add('Suck');
myList.add('it');
myList.add('terry');
myList.add('man');
console.log(myList.removeLast());
console.log(myList.removeLast());
console.log(myList.removeLast());
console.log(myList.toString());
console.log(myList.removeLast());
console.log(myList.toString());
