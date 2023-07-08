import { Connection } from 'db-core';
import { PoolClient } from 'pg';

export class PostgresConnection implements Connection {
	protected poolClient: PoolClient;

	constructor(poolClient: PoolClient) {
		this.poolClient = poolClient;
	}

	async commit(): Promise<void> {
		await this.poolClient.query('COMMIT');
	}

	async query( query: string, params?: any[] | undefined ): Promise<any> {
		return await this.poolClient.query(query, params);
	}

	async rollback(): Promise<void> {
		await this.poolClient.query('ROLLBACK');
	}

	async release(): Promise<void> {
		this.poolClient.release();
	}
}
