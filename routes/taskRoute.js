import express from 'express';
import {
  create,
  deleteTask,
  getAllTask,
  getTaskbyId,
  update
} from '../controller/taskController.js';

import { verifyToken } from '../middleware/authMiddleware.js';
import { validateTask } from '../middleware/validators.js';

const taskRoute = express.Router();
//only for the specified users
taskRoute.use(verifyToken); 

taskRoute.post('/task', validateTask, create);
taskRoute.get('/tasks', getAllTask);
taskRoute.get('/tasks/:id', getTaskbyId);
taskRoute.put('/update/task/:id', validateTask, update);
taskRoute.delete('/delete/task/:id', deleteTask);

export default taskRoute;
