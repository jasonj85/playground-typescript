const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

// simple array
const pepsi = ['brown', true, 40];

// tuple
const coke: [string, boolean, number] = ['brown', true, 35];
const fanta: Drink = ['orange', true, 25];

const houseSpecs: [number, number] = [100, 378];

// generally better to use objects as more descriptive
const purse = {
  cost: 100,
  size: 378,
};
