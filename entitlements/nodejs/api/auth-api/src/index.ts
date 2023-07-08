import  express, { Express } from 'express';
import { PostgresConnectionManager } from 'postgres-core';
import { identityRouter } from './routes/IdentityRoute';
import dotenv from 'dotenv';
import App from './App';

dotenv.config();

const app: App = new App();
app.initializeDatabase();
app.initializeControllers([identityRouter]);
app.publish(process.env.PORT ?? '8080');