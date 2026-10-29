// Export | import
export interface MyTask_ {
  id: number;
  title: string;
  status: "pending" | "completed";
}
export type MyPriority_ = "low" | "medium" | "high";

// Exercice suivant — Combiner les imports et les exports

export interface User_ {
  id: number,
  username: string
}

export type TaskStatus_ = "pending" | 'in_progress' | "completed"