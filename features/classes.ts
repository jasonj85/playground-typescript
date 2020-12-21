class Vehicle {
  // color: string = 'blue';

  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  public drive(): void {
    console.log('vrooooom!');
  }

  public honk(): void {
    console.log('beep beep beep!');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log('whooosh!');
  }
}

const vehicle = new Vehicle('red');
vehicle.drive();

const car = new Car(4, 'green');
car.honk();
vehicle.honk();
