import { Connection } from 'db-core';
import { PoolClient} from 'pg';

export class PostgresConnection implements Connection {

	protected client: PoolClient;

	private constructor(client: PoolClient) {
		this.client = client;
	}

	async close(): Promise<void> {
		this.client.release();
	}
	
	async commit(): Promise<void> {
		await this.client.query('COMMIT');
	}

	isClosed(): boolean {
		return this.client ? false: true;
	}
}
