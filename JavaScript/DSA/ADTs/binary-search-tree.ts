class Node<T> {
  data: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  show(): T {
    return this.data;
  }
}

export default class BST<T> {
  root: Node<T> | null = null;

  insert(data: T): void {
    const n = new Node<T>(data);

    if (this.root === null) {
      this.root = n;
      return;
    }

    let current: Node<T> | null = this.root;
    let parent: Node<T>;

    while (true) {
      parent = current;

      if (data < current!.data) {
        current = current!.left;
        if (current === null) {
          parent!.left = n;
          break;
        }
      } else {
        current = current!.right;
        if (current === null) {
          parent!.right = n;
          break;
        }
      }
    }
  }

  inOrder(node: Node<T> | null = this.root): void {
    if (node !== null) {
      this.inOrder(node.left);
      process.stdout.write(node.show() + " ");
      this.inOrder(node.right);
    }
  }

  preOrder(node: Node<T> | null = this.root): void {
    if (node !== null) {
      process.stdout.write(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node: Node<T> | null = this.root): void {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      process.stdout.write(node.show() + " ");
    }
  }

  getMin(): T | null {
    if (this.root === null) return null;

    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  getMax(): T | null {
    if (this.root === null) return null;

    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data: T): Node<T> | null {
    let current = this.root;

    while (current !== null) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  remove(data: T): void {
    this.root = this.removeNode(this.root, data);
  }

  private removeNode(node: Node<T> | null, data: T): Node<T> | null {
    if (node === null) return null;

    if (data === node.data) {
      // no children
      if (node.left === null && node.right === null) {
        return null;
      }

      // no left child
      if (node.left === null) {
        return node.right;
      }

      // no right child
      if (node.right === null) {
        return node.left;
      }

      // two children
      const tempNode = this.getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  private getSmallest(node: Node<T>): Node<T> {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}