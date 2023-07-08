import express, { Express } from 'express';
import { PostgresConnectionManager } from 'postgres-core';
import { router } from './routes/route';
// import dotenv from 'dotenv';

// dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? '8080';

app.use('/', router);

app.listen(port, () => {

	const postgresManager: PostgresConnectionManager =
		new PostgresConnectionManager.Builder()
			.withConfig({
				user: process.env.POSTGRES_USER,
				host: process.env.POSTGRES_HOST,
				database: process.env.POSTGRES_DATABASE,
				password: process.env.POSTGRES_PASSWORD,
				port: parseInt(process.env.POSTGRES_PORT ?? '5432')
			})
			.build();

	console.log(
		`⚡️[server]: Server is running at http://localhost:${port}`
	);
});
