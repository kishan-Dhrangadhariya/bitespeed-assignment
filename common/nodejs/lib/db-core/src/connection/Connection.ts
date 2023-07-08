export interface Connection {
    commit(): Promise<void>;
    query(query: string, params?: any[]): Promise<any>;
    rollback(): Promise<void>;
    release(): Promise<void>;
}