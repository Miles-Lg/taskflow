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
