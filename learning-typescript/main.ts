import { getUsername, isTaskCompleted } from "./taskUtils"
import type { User_ } from "./taskTypes";

const user1: User_ = {
  id: 1,
  username: "Milio"
}

console.log(getUsername(user1))
console.log(isTaskCompleted("completed"))