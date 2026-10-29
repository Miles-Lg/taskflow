import { getUsername, isTaskCompleted } from "./taskUtils.js";
import type { User_ } from "./taskTypes.js";

const user1: User_ = {
  id: 1,
  username: "Milio",
};

const user2: User_ = {
  id: 2,
  username: "Esc",
};

console.log(getUsername(user1));
console.log(isTaskCompleted("in_progress"));
console.log(getUsername(user2));
console.log(isTaskCompleted("completed"));
console.log("Compilation automatique réussie !");
