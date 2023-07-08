import { PostgresConnection, PostgresConnectionManager } from 'postgres-core';
import { ConnectionManager } from 'db-core';
export class IdentityDao {
	private connectionManager: ConnectionManager<PostgresConnection>;

	constructor() {
		this.connectionManager = PostgresConnectionManager.getInstance();
	}

	async identify(email: string, phoneNumber: string) {

        const connection = await this.connectionManager.getConnection();

        try {
            const result = await connection.query(
                `SELECT * FROM identity WHERE email = $1 AND phone_number = $2`,
                [email, phoneNumber]
            );

        } catch (error) {
            throw error;
        }
        finally {
            await connection.release();
        }
    }
}
