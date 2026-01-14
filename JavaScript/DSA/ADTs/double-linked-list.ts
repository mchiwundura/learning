class Node<T> {
  element: T;
  next: Node<T> | null;
  previous: Node<T> | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}

export default class DoublyLinkedList<T> {
  private head: Node<T>;

  constructor(headValue: T) {
    this.head = new Node<T>(headValue);
  }

  find(item: T): Node<T> | null {
    let currNode: Node<T> | null = this.head;

    while (currNode !== null && currNode.element !== item) {
      currNode = currNode.next;
    }

    return currNode;
  }

  findLast(): Node<T> {
    let currNode: Node<T> = this.head;

    while (currNode.next !== null) {
      currNode = currNode.next;
    }

    return currNode;
  }

  insert(newElement: T, item: T): void {
    const current = this.find(item);
    if (current === null) return;

    const newNode = new Node<T>(newElement);

    newNode.next = current.next;
    newNode.previous = current;

    if (current.next !== null) {
      current.next.previous = newNode;
    }

    current.next = newNode;
  }

  remove(item: T): void {
    const currNode = this.find(item);
    if (currNode === null) return;

    if (currNode.next !== null && currNode.previous !== null) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
    }

    currNode.next = null;
    currNode.previous = null;
  }

  display(): void {
    let currNode = this.head;

    while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  dispReverse(): void {
    let currNode = this.findLast();

    while (currNode.previous !== null) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }
}