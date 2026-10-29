import type { MyTask_, MyPriority_, User_, TaskStatus_ } from "./taskTypes.js";

export function getTaskTitle(task: MyTask_): string {
  return task.title;
}

export function getPriorityLabel_(priority: MyPriority_): string {
  return `Priority: ${priority}`;
}

export function getUsername(user: User_): string {
  return user.username;
}

export function isTaskCompleted(status: TaskStatus_): boolean {
  return status === "completed";
}
