import express from 'express';
import { getActiveUsers } from '../controllers/ActiveUsersController.js';

const router = express.Router();

router.get('/Active-users', getActiveUsers);

export default router;
