// Exo. 1
let username: string = "Milio";
let age: number = 22;
let isActive: boolean = true;

age = 24;
username = "Escobar";
isActive = true;

console.log(username, age, isActive);

// Exo. 2
interface User {
  username: string;
  age: number;
  email: string;
}

const user: User = {
  username: "Milio",
  age: 22,
  email: "milio@example.com",
};

user.age = 22;
user.email = "milio100@example.com";
user.username = "Miles";
