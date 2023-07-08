import { Connection, DataSource } from 'db-core';
import { PostgresConnection } from '../connection/PostgresConnection';
export class PostgresDataSource implements DataSource {
	
	private postgresConnection: PostgresConnection;
	
	private constructor(postgresConnection: PostgresConnection) {
		this.postgresConnection = postgresConnection;
	}

	async getConnection(): Promise<Connection> {
		
	}
}
