"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sortNum = new Sorter_1.Sorter(numbersCollection);
sortNum.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('UdKidxa');
var sortChar = new Sorter_1.Sorter(charactersCollection);
sortChar.sort();
console.log(charactersCollection.data);