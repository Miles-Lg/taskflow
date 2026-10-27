// Exo 1 — Variables et tableaux
const username_: string = "John DOE"
const age_: number = 15
const isLearning: boolean = true
const technologies: string[] = ["fullstack development", "graphic design", "networking & sys admin"]
let score = 10
// score = "ten"
// Objectif : vérifier les types primitifs, les tableaux typés, l'inférence et les erreurs de type. \\


// Exo 2 — Tâche typée
type Task__ = {
  readonly id: number,
  title: string,
  status: "pending" | "completed",
  description?: string
}

const myTask_: Task__ = {
  id: 1,
  title: "Learning TS",
  status: "completed",
  description: "Revision of all concepts learnt"
}

myTask_.title = "Learning TypeScript";
myTask_.status = "pending";
myTask_.description = "Practicing TypeScript";
// Test volontaire : TypeScript doit signaler une erreur
// myTask_.id = 2;
// Objectif : revoir les unions, les types littéraux, readonly et les propriétés optionnelles.


// Exo 3 — Types et fonctions
interface User__ {
  id: number,
  username: string
}

type UserDetails_ = User__ & { email: string }

function greetUser(user: User__, age: number = 22): string {
  return "Hello " + user.username
}

function calculateProgress(user: User__, completeTask: number, totalTask: number, isActive?: boolean): number {
  if (totalTask === 0) return 0
  return (completeTask / totalTask)
}
// Objectif : revoir type, interface, &, les fonctions typées et leurs paramètres.


// Exo 4 — Statuts et priorités
enum Priority {
  low = "low",
  medium = "medium",
  high = "high"
}

enum TaskStatus {
  pending = "pending",
  completed = "completed"
}

type __Task = {
  id: number,
  priority: Priority,
  status: TaskStatus
}

function updateTaskStatus(task: __Task, status: TaskStatus)  {
  task.status = status
}
// Une union pourrait la remplacer parce qu'elle est plus simple et n'accepte que l'une des valeurs de définis
// Objectif : réviser les enums, les objets typés et la modification d'un objet via une fonction. \\


// Exo 5 — Génériques
type ___Task = {
  id: number;
  title: string;
  status: "pending" | "completed";
};

const tsk1: ___Task = {
  id: 1,
  title: "Test 1",
  status: "completed"
}

const tsk2: ___Task = {
  id: 2,
  title: "Test 2",
  status: "pending"
}

type _User = {
  id: number;
  username: string;
};

const usr1: _User = {
  id: 1,
  username: "Bob"
}

const usr2: _User = {
  id: 2,
  username: "Doda"
}

function _getLast<T>(items: T[]): T | undefined {
  return items[items.length - 1]
}

function _getByIndex<T>(items: T[], index: number): T | undefined {
  return items[index]
}

function getTitle<T extends { title: string }>(item: T): string {
  return item.title
}

_getLast([usr1, tsk1, usr2, tsk2])
_getByIndex([usr1, usr2], 0)
getTitle(tsk1)

// _getByIndex(true, 0) // Erreur : true n'est pas un tableau
// getTitle(1)          // Erreur : un nombre ne possède pas de propriété title
// Objectif : vérifier que tu comprends les paramètres génériques, T[], T | undefined et les contraintes avec extends.


// Exo 6 — Mini-système TaskFlow
enum MyPriority {
  low = "low",
  medium = "medium",
  high = "high"
}

type MyTask = {
  readonly id: number,
  title: string
  priority: MyPriority,
  status: "pending" | "completed",
  description?: string
}

let allTask: MyTask[] = [
  {
    id: 1,
    title: "Create an API",
    status: "pending",
    priority: MyPriority.high,
    description: "Implement REST routes"
  },
  {
    id: 2,
    title: "Write tests",
    status: "pending",
    priority: MyPriority.high
  }
]

function addTask(newTask: MyTask): void {
  allTask.push(newTask)
}

function getTaskByIndex<T>(items: T[], index: number): T | undefined {
  return items[index]
}

function completeMyTask(task: MyTask): void {
  task.status = "completed"
}

function getLastElement<T>(items: T[]): T | undefined {
  return items[items.length - 1]
}
// Objectif : écrire un petit programme cohérent plutôt que des exemples indépendants.

// Exo 7: Exercice pratique — TaskFlow
type myTask = {
  readonly id: number;
  title: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
};

function getPropertyByKeyof<T, K extends keyof T>(task: T, key: K): T[K] {
  return task[key]
}

const newTask: myTask = {
  id: 1,
  title: "Learn TypeScript with Node JS",
  status: "pending",
  priority: "high"
}

getPropertyByKeyof(newTask, "title")
getPropertyByKeyof(newTask, "id")
// getPropertyByKeyof(newTask, "email")


function getTaskValueByKey<T, K extends keyof T>(task: T, key: K): T[K] {
  return task[key]
}

const myPriority: "low" | "medium" | "high" = getTaskValueByKey(newTask, 'priority')