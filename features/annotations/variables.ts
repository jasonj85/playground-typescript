let apples: number = 5;
let speed: string = 'fast';
let hasDog: boolean = true;
let nothing: null = null;
let nothingAgain: undefined = undefined;

// objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'yellow'];
let myNumbers: number[] = [4, 67, 8];
let truths: boolean[] = [false, true, true];

// classes
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 5,
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// a. function that returns any type
const json = '{"x": 10, "y": 3}';
const coordinates: { x: number; y: number } = JSON.parse(json);
coordinates.x = 1;

// b. declare, but initalise later
let words = ['apple', 'coat'];
let foundApple: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'apple') foundApple = true;
}

// c. cant be inferred correctly
let numbers = [-2, -5, 59];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[1];
  }
}
