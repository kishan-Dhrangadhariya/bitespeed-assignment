import { Connection } from '../connection/Connection';

export interface DataSource {
	getConnection(): Promise<Connection>;
}
