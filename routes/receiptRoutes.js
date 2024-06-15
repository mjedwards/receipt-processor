import express from 'express';
import {postReceipts, getReceiptPoints} from '../controllers/receiptController.js';

const router = express.Router();

router.post('/process', postReceipts);

router.get('/:id/process', getReceiptPoints);

export default router;
