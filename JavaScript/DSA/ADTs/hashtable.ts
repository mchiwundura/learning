export default class HashTable {
  private table: (string | undefined)[];
  private size: number;

  constructor(size: number = 137) {
    this.size = size;
    this.table = new Array(this.size);
  }

  put(data: string): void {
    const pos = this.betterHash(data);
    this.table[pos] = data;
  }

  simpleHash(data: string): number {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }

    console.log(`Hash value: ${data} -> ${total}`);
    return total % this.table.length;
  }

  betterHash(string: string): number {
    const H = 37;
    let total = 0;

    for (let i = 0; i < string.length; i++) {
      total = H * total + string.charCodeAt(i);
    }

    total = total % this.table.length;

    if (total < 0) {
      total += this.table.length - 1;
    }

    return total;
  }

  showDistro(): void {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(`${i}: ${this.table[i]}`);
      }
    }
  }
}