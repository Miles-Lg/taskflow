import express from 'express'
import getAllTasks from '../controllers/taskController.js'
import { taskId, createTaskController } from '../controllers/taskController.js'

const router = express.Router()

router.get('/', getAllTasks)
router.get('/:id', taskId)

router.post('/', createTaskController)

export default router