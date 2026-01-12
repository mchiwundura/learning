export default class Queue<T> {
  private dataStore: T[] = [];

  enqueue(element: T): void {
    this.dataStore.push(element);
  }

  dequeue(): T | undefined {
    return this.dataStore.shift();
  }

  front(): T | undefined {
    return this.dataStore[0];
  }

  back(): T | undefined {
    return this.dataStore[this.dataStore.length - 1];
  }

  toString(): string {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; i++) {
      retStr += `${this.dataStore[i]}\n`;
    }
    return retStr;
  }

  empty(): boolean {
    return this.dataStore.length === 0;
  }
}