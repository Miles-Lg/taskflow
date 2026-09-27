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

export async function updateTask(id, task) {
  try {
    const result = await DB.query(`
      UPDATE tasks
      SET title=$2, description=$3, priority=$4, status=$5, due_date=$6
      WHERE id = $1 
      RETURNING *`,
      [id, task.title, task.description, task.priority, task.status, task.due_date]
    )

    return result.rows
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function deleteTask(id) {
  try {
    const result = await DB.query(`
      DELETE FROM tasks WHERE id = $1 RETURNING *`, [id]
    )
    return result.rows
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function completeTask(id) {
  try {
    const result = await DB.query(`
      UPDATE tasks SET status = 'completed' WHERE id = $1 RETURNING *`,
      [id])
    return result.rows
  } catch (error) {
    console.log(error)
    throw error
  }
}