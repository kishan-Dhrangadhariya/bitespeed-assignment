import { PostgresConnection, PostgresConnectionManager } from 'postgres-core';
import { ConnectionManager } from 'db-core';
export class IdentityDao {
	private connectionManager: ConnectionManager<PostgresConnection>;

	constructor() {
		this.connectionManager = PostgresConnectionManager.getInstance();
	}

	async identify(email: string, phoneNumber: string) {

        const connection = await this.connectionManager.getConnection();
        let resultSet = [];
        try {
            const result = await connection.query(
                `CALL "Entitlements"."contact_identity"($1 , $2, $3)`,
                [email, phoneNumber, resultSet]
            );
            return result.rows;
        } catch (error) {
            throw error;
        }
        finally {
            await connection.release();
        }
    }
}
