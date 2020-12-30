export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split('');

    const left = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = left;

    this.data = chars.join('');
  }
}
