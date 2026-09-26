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