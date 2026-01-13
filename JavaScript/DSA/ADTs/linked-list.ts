class Node<T> {
  element: T;
  next: Node<T> | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

export default class LinkedList<T> {
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

  findPrevious(item: T): Node<T> | null {
    let currNode: Node<T> | null = this.head;

    while (
      currNode.next !== null &&
      currNode.next.element !== item
    ) {
      currNode = currNode.next;
    }

    return currNode;
  }

  insert(newElement: T, item: T): void {
    const current = this.find(item);
    if (current === null) return;

    const newNode = new Node<T>(newElement);
    newNode.next = current.next;
    current.next = newNode;
  }

  remove(item: T): void {
    const prevNode = this.findPrevious(item);

    if (prevNode !== null && prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display(): void {
    let currNode = this.head;

    while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
}