import taskModel from '../models/taskModel.js'

export default async function getAllTasks(req, res) {
  try {
    const tasks = await taskModel()
    console.log(tasks)
    res.send(tasks)
  } catch (error) {
    console.log(error)
    res.status(500).send("Something went wrong")
  }
}