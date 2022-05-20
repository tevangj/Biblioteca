import express from 'express';
import { getBookCat } from '../Controllers/BookCatController.js';

const router = express.Router();

router.get('/Books-Catalog', getBookCat);

export default router;
