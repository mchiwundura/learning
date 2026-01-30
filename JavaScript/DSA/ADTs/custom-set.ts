export default class CustomSet<T> {
  private dataStore: T[] = [];

  add(data: T): boolean {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
    }
    return false;
  }

  remove(data: T): boolean {
    const pos = this.dataStore.indexOf(data);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
    }
    return false;
  }

  size(): number {
    return this.dataStore.length;
  }

  show(): T[] {
    return this.dataStore;
  }

  contains(data: T): boolean {
    return this.dataStore.indexOf(data) > -1;
  }

  union(set: CustomSet<T>): CustomSet<T> {
    const tempSet = new CustomSet<T>();

    for (let i = 0; i < this.dataStore.length; i++) {
      tempSet.add(this.dataStore[i]);
    }

    for (let i = 0; i < set.dataStore.length; i++) {
      if (!tempSet.contains(set.dataStore[i])) {
        tempSet.add(set.dataStore[i]);
      }
    }

    return tempSet;
  }

  intersect(set: CustomSet<T>): CustomSet<T> {
    const tempSet = new CustomSet<T>();

    for (let i = 0; i < this.dataStore.length; i++) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }

    return tempSet;
  }

  subset(set: CustomSet<T>): boolean {
    if (this.size() > set.size()) {
      return false;
    }

    for (const member of this.dataStore) {
      if (!set.contains(member)) {
        return false;
      }
    }

    return true;
  }

  difference(set: CustomSet<T>): CustomSet<T> {
    const tempSet = new CustomSet<T>();

    for (let i = 0; i < this.dataStore.length; i++) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i]);
      }
    }

    return tempSet;
  }
}