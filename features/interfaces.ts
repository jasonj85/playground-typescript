interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldBmw = {
 name: 'bmw',
 year: new Date(),
 broken: false,
 summary():string  {
   return `Name is ${this.name}`;
 }
}

const pepsiMax = {
  color: 'brown',
  carbonated: true,
  sugar: 20,
  summary():string  {
    return `Drink has ${this.sugar}g of sugar`;
  }
}

const printVehicle = (vehicle: Vehicle) : void {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
}

printVehicle(oldBmw);