// Exo. 1
function formatValue(value: string | number | boolean): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value * 2);
  } else {
    console.log("Boolean value:", value);
  }
}

formatValue("Milio");
formatValue(22);
formatValue(true);

// Exo. 2
interface Student {
  name: string;
  school: string;
  grade: number;
}

interface Teacher {
  name: string;
  subject: string;
  salary: number;
}

function displayPerson(person: Student | Teacher): void {
  if ("school" in person) {
    console.log(person.name);
    console.log(person.school);
    console.log(person.grade);
  } else {
    console.log(person.name);
    console.log(person.subject);
    console.log(person.salary);
  }
}

const std: Student = {
  name: "Milio",
  school: "ISTC",
  grade: 16,
};

const tchr: Teacher = {
  name: "Jean",
  subject: "Mathematics",
  salary: 200_000,
};

displayPerson(std);
displayPerson(tchr);

// Exo. 3
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): void {
    console.log(`${this.brand} is driving`);
  }
}

class Motorcycle {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  wheelie(): void {
    console.log(`${this.brand} is doing a wheelie`);
  }
}

function operateVehicle(vehicle: Car | Motorcycle): void {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.wheelie();
  }
}

const car = new Car("Toyota");
const bike = new Motorcycle("Yamaha");

operateVehicle(car);
operateVehicle(bike);

// Exo. 4
interface User {
  username: string;
  email: string;
}

interface Product {
  name: string;
  price: number;
}

class Admin {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  deleteUser(): void {
    console.log(`${this.username} deleted a user`);
  }
}

function handleInput(input: string | number | User | Product | Admin): void {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else if (typeof input === "number") {
    console.log(input * 2);
  } else if (input instanceof Admin) {
    input.deleteUser();
  } else if ("email" in input) {
    console.log(input.username);
    console.log(input.email);
  } else {
    console.log(input.name);
    console.log(input.price);
  }
}

handleInput("milio");
handleInput(10);
handleInput(new Admin("Milio"));
handleInput({ username: "Jean", email: "jean@example.com" });
handleInput({ name: "Laptop", price: 500 });
