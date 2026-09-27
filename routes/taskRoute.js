import express from 'express'
import getAllTasks from '../controllers/taskController.js'
import { taskId, createTaskController, updateTaskController } from '../controllers/taskController.js'

const router = express.Router()

router.get('/', getAllTasks)
router.get('/:id', taskId)

router.post('/', createTaskController)
router.patch('/:id', updateTaskController)

export default router