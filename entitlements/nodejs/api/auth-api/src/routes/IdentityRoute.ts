import express from 'express';
import { identityController } from '../controller';

export const identityRouter = express.Router();
identityRouter.post('/identity', identityController);
