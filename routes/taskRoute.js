import express from 'express'
import getAllTasks from '../controllers/taskController.js'
import { taskId } from '../controllers/taskController.js'

const router = express.Router()

router.get('/', getAllTasks)
router.get('/:id', taskId)

export default router