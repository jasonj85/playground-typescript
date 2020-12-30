import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sortNum = new Sorter(numbersCollection);
sortNum.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('UdKidxa');
const sortChar = new Sorter(charactersCollection);
sortChar.sort();

console.log(charactersCollection.data);
