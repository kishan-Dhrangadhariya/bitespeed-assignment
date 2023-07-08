import { Connection } from "../connection/Connection";

export interface ConnectionManager<T1 extends Connection> {
    getConnection(): Promise<T1>;
    releaseConnection(connection: T1): Promise<void>;
}