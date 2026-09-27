import taskModel from '../models/taskModel.js'
import { getTaskById, createTask, updateTask, completeTask, deleteTask, searchTasks } from '../models/taskModel.js'

export default async function getAllTasks(req, res) {
  try {
    const tasks = await taskModel()

    console.log(tasks)
    res.status(200).send(tasks)

  } catch (error) {
    console.log(error)
    res.status(500).send("Something went wrong")
  }
}

export async function getTaskByIdController(req, res) {
  try {
    const id = parseInt(req.params.id)
    const taskById = await getTaskById(id)

    if (taskById.length > 0) {
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

export async function createTaskController(req, res) {
  try {
    const newTask = await createTask(req.body)
    console.log(newTask)
    res.status(201).send(newTask)

  } catch (error) {
    console.log(error)
    res.status(500).send("Something went wrong")
  }
}

export async function updateTaskController(req, res) {
  try {
    const id = parseInt(req.params.id)
    const updatedTask = await updateTask(id, req.body)
    res.status(200).send(updatedTask)
  } catch (error) {
    console.log(error)
    res.status(500).send("Something went wrong")
  }
}

export async function deleteTaskController(req, res) {
  try {
    const id = parseInt(req.params.id)
    const deletedTask = await deleteTask(id)
    res.status(200).send(deletedTask)
  } catch (error) {
    console.error(error)
    res.status(500).send("Something went wrong")
  }
}

export async function completeTaskController(req, res) {
  try {
    const id = parseInt(req.params.id)
    const completedTask = await completeTask(id)
    res.status(200).send(completedTask)
  } catch (error) {
    console.log(error)
    res.status(500).send("Something went wrong!")
  }
}

export async function searchTasksController(req, res) {
  try {
    const searchTerm = req.query.q
    const searchedTasks = await searchTasks(searchTerm)
    res.status(200).send(searchedTasks)
  } catch (error) {
    console.log(error)
    res.status(500).send('Something went wrong')
  }
}