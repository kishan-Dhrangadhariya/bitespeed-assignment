import { ConnectionManager } from 'db-core';
import { Pool, PoolConfig } from 'pg';
import { PostgresConnection } from '../connection/PostgresConnection';

export class PostgresConnectionManager implements ConnectionManager<PostgresConnection> {
	private pool: Pool;
	private static connection: PostgresConnectionManager;

	private constructor(postgresConfig: PoolConfig) {
		this.pool = new Pool(postgresConfig);
	}

	static getInstance(): PostgresConnectionManager {
		if (!PostgresConnectionManager.connection) {
			throw new Error('PostgresConnectionManager not initialized');
		}
		return PostgresConnectionManager.connection;
	}


	async getConnection(): Promise<PostgresConnection> {
		return new PostgresConnection(await this.pool.connect());
	}

	async releaseConnection(connection: PostgresConnection): Promise<void> {
		connection.release();
	}
	
	public static Builder = class {
		postgresConfig?: PoolConfig;
		
		private constructor() {
	
		}
	
		withConfig(postgresConfig: PoolConfig): this {
			this.postgresConfig = postgresConfig;
			return this;
		}
	
		build():  PostgresConnectionManager{
			if (!this.postgresConfig) {
				throw new Error('PostgresConnectionManagerBuilder requires a postgresConfig');
			}
			PostgresConnectionManager.connection = new PostgresConnectionManager(this.postgresConfig);
			return PostgresConnectionManager.connection;
		}
	}
}
