export interface DataSource {

    connect(): Promise<void>;
    disconnect(): Promise<void>;

}