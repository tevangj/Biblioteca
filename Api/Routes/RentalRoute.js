import express from 'express';
import { getRental } from '../Controllers/RentalController.js';

const router = express.Router();

router.get('/Rental', getRental);

export default router;