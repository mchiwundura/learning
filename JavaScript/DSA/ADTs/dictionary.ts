export default class Dictionary<K extends string, V> {
  private datastore: Record<K, V> = {} as Record<K, V>;

  add(key: K, value: V): void {
    this.datastore[key] = value;
  }

  find(key: K): V | undefined {
    return this.datastore[key];
  }

  remove(key: K): void {
    delete this.datastore[key];
  }

  showAll(): void {
    for (const key of Object.keys(this.datastore) as K[]) {
      console.log(`${key} -> ${this.datastore[key]}`);
    }
  }

  count(): number {
    let n = 0;
    for (const _ of Object.keys(this.datastore)) {
      n++;
    }
    return n;
  }

  clear(): void {
    for (const key of Object.keys(this.datastore)) {
      delete this.datastore[key as K];
    }
  }
}