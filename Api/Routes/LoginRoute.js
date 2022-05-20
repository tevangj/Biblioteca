import express from 'express';
import { createUser } from '../Controllers/LoginsController';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/Login-Api',auth, createUser);

export default router;