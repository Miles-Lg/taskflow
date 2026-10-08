let myName: string;
let age: number;
let isStudent: boolean;
let techSkills: string[];
let progress: number;

// myName = 12;
// age = "@";

let username = "Milio";
let userAge = 20;
let student = true;
// userAge = "hello";

let skills: string[] = [
  "node",
  "express",
  "postgresql",
  "rest api",
  "typescript",
  "react",
  "nest",
  "next",
];
let id: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let state: boolean[] = [true, false, true, true, false, false, true, true];

interface Task {
  id: number;
  title: string;
  description?: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "completed";
  due_date?: string;
}

const task: Task = {
  id: 1,
  title: "Workout",
  priority: "high",
  status: "pending",
};

const task_2: Task = {
  id: 2,
  title: "Learn TypeScript",
  description: "Practice interface",
  priority: "medium",
  status: "pending",
  due_date: "10/7/2026",
};

function greet(name: string): string {
  return "Hello " + name;
}

function calculateAge(birthYear: number): number {
  return 2026 - birthYear;
}

function isCompleted(status: "pending" | "completed"): boolean {
  return status === "completed" ? true : false;
}
