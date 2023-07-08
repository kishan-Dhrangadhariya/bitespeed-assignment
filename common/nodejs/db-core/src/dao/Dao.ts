import { Connection } from '../connection/Connection';
import { DataSource } from '../dataSource/DataSource';
import { DaoException } from '../exceptions/DaoException';

export class Dao {
	protected dataSource: DataSource;

	constructor(dataSource: DataSource) {
		this.dataSource = dataSource;
	}

	public async borrowConnection(): Promise<Connection> {
		return await this.dataSource.getConnection();
	}

	protected async returnConnection(connection: Connection): Promise<void> {
		try {
			if (connection != null && !await connection.isClosed()) {
				connection.commit();
				connection.close();
			}
		} catch (e) {
			if (e instanceof Error) {
				throw new DaoException('Return connection failed: ' + e.message);
			}
			throw new DaoException('Return connection failed');
		}
	}
}
