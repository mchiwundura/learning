export default class List<T> {
	private dataStore: T[] = [];
	private listSize: number = 0;
	private pos: number = 0;

	constructor() { }

	// Clears the list
	clear(): void {
		this.dataStore = [];
		this.listSize = 0;
		this.pos = 0;
	}

	// Finds the position of an element
	find(element: T): number {
		return this.dataStore.indexOf(element);
	}

	// Converts list to string
	toString(): string {
		return this.dataStore.toString();
	}

	// Inserts an element after another element
	insert(element: T, after: T): boolean {
		const insertPos = this.find(after);
		if (insertPos > -1) {
			this.dataStore.splice(insertPos + 1, 0, element);
			this.listSize++;
			return true;
		}
		return false;
	}

	// Appends an element to the end
	append(element: T): void {
		this.dataStore[this.listSize++] = element;
	}

	// Removes an element
	remove(element: T): boolean {
		const foundAt = this.find(element);
		if (foundAt > -1) {
			this.dataStore.splice(foundAt, 1);
			this.listSize--;
			if (this.pos >= this.listSize) {
				this.pos = this.listSize - 1;
			}
			return true;
		}
		return false;
	}

	// Navigation methods
	front(): void {
		this.pos = 0;
	}

	end(): void {
		this.pos = this.listSize - 1;
	}
	hasPrev(): void {
		return this.pos != 0;
	}

	prev(): void {
		if (this.pos > 0) {
			this.pos--;
		}
	}

	hasNext(): boolean {
		return this.pos < this.listSize - 1;
	}

	next(): void {
		if (this.pos < this.listSize - 1) {
			this.pos++;
		}
	}

	// Length of list
	length(): number {
		return this.listSize;
	}

	// Current position
	currPos(): number {
		return this.pos;
	}

	// Move to a specific position
	moveTo(position: number): void {
		if (position >= 0 && position < this.listSize) {
			this.pos = position;
		}
	}

	// Get current element
	getElement(): T | undefined {
		return this.dataStore[this.pos];
	}

	// Check if list contains an element
	contains(element: T): boolean {
		return this.find(element) > -1;
	}
}
