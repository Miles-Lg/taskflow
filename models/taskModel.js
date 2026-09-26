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