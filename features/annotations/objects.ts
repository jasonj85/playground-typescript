const profile = {
  name: 'jason',
  age: 25,
  coords: {
    lat: 938
    lon: 345
  },
  setAge(age: number): void {
    this.age = age;
  }

};

const {age}: {age: number} = profile;
const {coords: {lat, lon}}: {coords: {lat: number; lon:number}} = profile;