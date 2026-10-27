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

let state: boolean[] = [
  true,
  false,
  true,
  true,
  false,
  false,
  true,
  true,
];

// Interface Task
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

function isCompleted(
  status: "pending" | "completed"
): boolean {
  return status === "completed";
}

type PriorityType = "high" | "medium" | "low";

type Status = "pending" | "completed";

type TaskType = {
  id: number;
  description?: string;
  priority: PriorityType;
  status: Status;
  due_date?: string;
};

type TaskInfo = {
  id: number;
  title: string;
};

type TaskDates = {
  created_at: string;
  due_date?: string;
};

type TaskDetails = TaskInfo & TaskDates;

const taskDetails: TaskDetails = {
  id: 1,
  title: "test",
  created_at: "23/12/2020",
};

interface UserInfo {
  id: number;
  username: string;
}

interface UserDetails extends UserInfo {
  email: string;
}

const user: UserDetails = {
  id: 1,
  username: "Esc",
  email: "test@test",
};

type UserInf = {
  id: number;
  username: string;
};

type UserDet = UserInf & {
  email: string;
};

const user_1: UserDet = {
  id: 2,
  username: "Milio",
  email: "test1@test.io",
};

function add(x: number, y: number): number {
  return x + y;
}

function displayTask(title: string): void {
  console.log("Task: " + title);
}

function test(
  id: number,
  name: string,
  desc?: string
): void {
  console.log(name + " " + id + " " + desc);
}

function createTask(
  title: string,
  priority: string = "medium"
): void {
  console.log(title + " " + priority);
}

type User = {
  username: string;
  age: number;
};

const myUser: User = {
  username: "Hashirama",
  age: 44,
};

function displayUser(user: User): void {
  console.log(user.username + " " + user.age);
}

displayUser(myUser);

function completeTask(task: Task): void {
  task.status = "completed";
}

const myTask: Task = {
  id: 3,
  title: "TypeScript",
  priority: "medium",
  status: "pending",
};

completeTask(myTask);

console.log(myTask.status);

// Enum Priority
enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

// Deuxième définition de Task : renommée Task2
type Task2 = {
  readonly id: number;
  title: string;
  priority: Priority;
};

const taskOne: Task2 = {
  id: 1,
  title: "Learning TypeScript",
  priority: Priority.Low,
};

const taskTwo: Task2 = {
  id: 2,
  title: "Learning React",
  priority: Priority.High,
};

function getLast<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

const verbs = getLast<string>([
  "to be",
  "to have",
  "to eat",
  "to work",
  "to progress",
]);

const IDs = getLast<number>([1, 2, 3, 4, 5]);

function returnValue<T>(value: T): T {
  return value;
}

const usernameOne = returnValue<string>("Harry Potter");

const isMagician = returnValue<boolean>(true);

const powerCount = returnValue<number>(97);

// Types pour les tableaux de tâches et d'utilisateurs
type Task_ = {
  id: number;
  title: string;
  status: "pending" | "completed";
};

type User_ = {
  id: number;
  username: string;
};

function getByIndex<T>(arr: T[], index: number): T | undefined {
  return arr[index];
}

const arrTasks: Task_[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    status: "completed",
  },
  {
    id: 2,
    title: "Practice generics",
    status: "pending",
  },
];

const arrUsers: User_[] = [
  {
    id: 1,
    username: "Milio",
  },
];

const task_ = getByIndex(arrTasks, 0);

const user_ = getByIndex(arrUsers, 0);

function getTaskTitle<T extends { title: string }>(value: T): string {
  return value.title;
}

type _Task_ = {
  id: number;
  title: string;
  status: "pending" | "completed";
};

const task1: _Task_ = {
  id: 1,
  title: "Test",
  status: "pending",
};

getTaskTitle(task1);

getTaskTitle({
  id: 1,
  title: "Learn TypeScript",
  status: "pending",
});

getTaskTitle({
  title: "Prepare report",
  author: "Milio",
});

// keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}


function getKeys<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}