import express from 'express'
import getAllTasksController from '../controllers/taskController.js'
import { getTaskByIdController, createTaskController, updateTaskController, completeTaskController, deleteTaskController, searchTasksController } from '../controllers/taskController.js'

const router = express.Router()

router.get('/', getAllTasksController)
router.get('/search', searchTasksController)
router.get('/:id', getTaskByIdController)

router.post('/', createTaskController)

router.patch('/:id', updateTaskController)
router.patch('/:id/complete', completeTaskController)
router.delete('/:id', deleteTaskController)

export default router