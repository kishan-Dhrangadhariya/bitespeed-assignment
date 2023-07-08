import express from 'express';
import {identityController } from '../controller';
export const router = express.Router();
router.post('/identity', identityController);
module.exports = router;