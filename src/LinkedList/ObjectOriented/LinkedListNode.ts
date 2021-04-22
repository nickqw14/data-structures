class LinkedListNode<T> {
  data: T;
  node: LinkedListNode<T> | null;

  constructor(data: T, node?: LinkedListNode<T>) {
    this.data = data;
    this.node = node ? node : null;
  }
}
