import taskModel from '../models/taskModel.js'
import { getTaskById } from '../models/taskModel.js'

export default async function getAllTasks(req, res) {
  try {
    const tasks = await taskModel()

    console.log(tasks)
    console.log(tasks.length)
    res.status(200).send(tasks)

  } catch (error) {
    console.log(error)
    res.status(500).send("Something went wrong")
  }
}

export async function taskId(req, res) {
  try {
    const id = parseInt(req.params.id)
    const taskById = await getTaskById(id)

    if (taskById.length > 0) {
      console.log(taskById.length)
      console.log(taskById)
      res.status(200).send(taskById)
    } else {
      console.log("There's not task with the id " + id)
      res.status(404).send("There's not task with the id " + id)
    }

  } catch (error) {
    console.log(error)
    res.status(500).send("Something went wrong")
  }
}