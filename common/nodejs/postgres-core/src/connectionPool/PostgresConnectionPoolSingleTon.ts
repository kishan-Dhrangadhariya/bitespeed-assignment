import { Client, Pool, PoolClient, PoolConfig } from 'pg';

export class PostgresConnectionPoolSingleTon {
	private pool: Pool;
	private static connection: PostgresConnectionPoolSingleTon;

	private constructor(postgresConfig: PoolConfig) {
		this.pool = new Pool(postgresConfig);
	}

	static getInstance(postgresConfig: PoolConfig): PostgresConnectionPoolSingleTon {
		if (!PostgresConnectionPoolSingleTon.connection) {
			PostgresConnectionPoolSingleTon.connection = new PostgresConnectionPoolSingleTon(postgresConfig);
		}
		return PostgresConnectionPoolSingleTon.connection;
	}

	async getConnection(): Promise<PoolClient> {
		return await this.pool.connect();
	}
}
