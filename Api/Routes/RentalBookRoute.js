import express from 'express';
import { getRentalBook } from '../Controllers/RentalBookController.js';

const router = express.Router();

router.get('/Rental_Book', getRentalBook);

export default router;