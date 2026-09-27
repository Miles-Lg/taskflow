import express from 'express'
import getAllTasks from '../controllers/taskController.js'
import { getTaskByIdController, createTaskController, updateTaskController, deleteTaskController } from '../controllers/taskController.js'

const router = express.Router()

router.get('/', getAllTasks)
router.get('/:id', getTaskByIdController)

router.post('/', createTaskController)

router.patch('/:id', updateTaskController)
router.delete('/:id', deleteTaskController)

export default router