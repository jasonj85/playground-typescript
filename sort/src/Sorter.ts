import { NumbersCollection } from './NumbersCollection';

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;

    for (var i = 0; i < length; i++) {
      for (var x = 0; x < length - i - 1; x++) {
        if (this.collection.compare(x, x + 1)) {
          this.collection.swap(x, x + 1);
        }
      }
    }
  }
}
