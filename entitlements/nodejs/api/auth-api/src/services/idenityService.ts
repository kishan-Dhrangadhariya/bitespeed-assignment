import { IdentityDao } from '../dao';

export class IdentityService {
    identityDao: IdentityDao;

    constructor() {
        this.identityDao = new IdentityDao();
    }
    async identify(email: string, phoneNumber: string) {

    }
}