// class
// - Blueprint for creating objects with  properties and methods

class Vehicle {
  //  color2: string = "red"; // initializing the  variable
  constructor(public color: string) {
    this.color = color;
  }

  public drive(): void {
    console.log("Driving...");
  }

  protected honk(): void {
    console.log("Beep...");
  }
}

// inheriting

const vehicle = new Vehicle("orange");
vehicle.drive();
// vehicle.honk();

class Car extends Vehicle {
  constructor(public name: string, color: string) {
    super(color);
  }
  public drive(): void {
    console.log(`Driving ${this.name}`);
    this.honk();
  }
}

const car1 = new Car("BMW", "red");
console.log(car1.name);
car1.drive();

// Modifiers (public, private, protected)

// public - accessible from outside the class
// private - accessible only from inside the class
// protected - accessible from inside and outside the class
