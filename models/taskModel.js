import DB from '../config/database.js'

export default async function getAllTasks() {
  try {
    const result = await DB.query("select * from tasks")
    return result.rows
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getTaskById(id) {
  try {
    const result = await DB.query("select * from tasks where id = $1", [id])
    return result.rows
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function createTask(task) {
  try {
    const createNewTask = await DB.query(`
      INSERT INTO tasks (title, description, priority, status, due_date) 
      VALUES($1, $2, $3, $4, $5)
      RETURNING *`,
      [task.title, task.description, task.priority, task.status, task.due_date]
    )
    return createNewTask.rows
  } catch (error) {
    console.error(error)
    throw error
  }
}