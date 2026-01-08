export default class Stack<T> {
	private dataStore: T[] = [];
	private top: number = 0;

	push(element: T): void {
		this.dataStore[this.top++] = element;
	}

	pop(): T | undefined {
		if (this.top === 0) {
			return undefined;
		}
		return this.dataStore[--this.top];
	}

	peek(): T | undefined {
		if (this.top === 0) {
			return undefined;
		}
		return this.dataStore[this.top - 1];
	}

	clear(): void {
		this.top = 0;
		this.dataStore = [];
	}

	length(): number {
		return this.top;
	}
}
