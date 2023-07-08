import express, { Router } from 'express';
import { PostgresConnectionManager } from 'postgres-core';

export default class App {
	public app: express.Application;

	constructor() {
		this.app = express();
	}

	public publish(port: string) {
		this.app.listen(port, () => {
            console.log(
                `⚡️[server]: Server is running at http://localhost:${port}`
            );
		});
	}

	public initializeControllers(controllers: Router[]) {
		controllers.forEach((controller: Router) => {
			this.app.use(express.json());
			this.app.use(express.urlencoded());
			this.app.use('/', controller);
		});
	}

	public initializeDatabase() {
		// Initialize database here

		const postgresManager: PostgresConnectionManager =
			new PostgresConnectionManager.Builder()
				.withConfig({
					user: process.env.POSTGRES_USER,
					host: process.env.POSTGRES_HOST,
					database: process.env.POSTGRES_DATABASE,
					password: process.env.POSTGRES_PASSWORD,
					port: parseInt(
						process.env.POSTGRES_PORT ?? '5432'
					),
				})
				.build();
	}
}
