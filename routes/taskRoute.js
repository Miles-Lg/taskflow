import express from 'express'
import getAllTasksController from '../controllers/taskController.js'
import { getTaskByIdController, createTaskController, updateTaskController, completeTaskController, deleteTaskController, searchTasksController, renderCreatePage, renderEditPage } from '../controllers/taskController.js'

const router = express.Router()

router.get('/', getAllTasksController)
router.get('/search', searchTasksController)
router.get('/create', renderCreatePage)
router.get('/:id/edit', renderEditPage)
router.get('/:id', getTaskByIdController)

router.post('/', createTaskController)

router.patch('/:id/complete', completeTaskController)
router.patch('/:id', updateTaskController)

router.delete('/:id', deleteTaskController)

export default router