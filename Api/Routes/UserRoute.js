import express from 'express';
import { getUsers } from '../Controllers/UsersController.js';

const router = express.Router();

router.get('/Users', getUsers);

export default router;