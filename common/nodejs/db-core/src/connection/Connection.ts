export interface Connection {
	close(): Promise<void>;
	commit(): Promise<void>;
	isClosed(): boolean;
}
