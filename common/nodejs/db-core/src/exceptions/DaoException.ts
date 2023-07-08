export class DaoException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DaoException';
    }
}