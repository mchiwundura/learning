class Node<T> {
  element: T;
  next: Node<T>;

  constructor(element: T) {
    this.element = element;
    // will be set properly by the list
    this.next = this as any;
  }
}

export default class CircularLinkedList<T> {
  private head: Node<T>;

  constructor(headValue: T) {
    this.head = new Node<T>(headValue);
    this.head.next = this.head; // 🔁 circular link
  }

  find(item: T): Node<T> | null {
    let currNode = this.head;

    while (currNode.element !== item) {
      currNode = currNode.next;

      if (currNode === this.head) {
        return null; // item not found
      }
    }

    return currNode;
  }

  findPrevious(item: T): Node<T> | null {
    let currNode = this.head;

    while (
      currNode.next !== this.head &&
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

    if (
      prevNode !== null &&
      prevNode.next !== this.head
    ) {
      prevNode.next = prevNode.next.next;
    }
  }

  display(): void {
    let currNode = this.head;

    while (
      currNode.next !== this.head
    ) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
}