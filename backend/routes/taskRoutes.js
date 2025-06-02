import express from 'express';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Protected Routes
router.use(authMiddleware);

router.post('/', createTask);            // Create new task
router.get('/', getTasks);               // Get all tasks
router.get('/:id', getTaskById);         // Get a single task by ID
router.put('/:id', updateTask);          // Update a task
router.delete('/:id', deleteTask);       // Delete a task

export default router;
