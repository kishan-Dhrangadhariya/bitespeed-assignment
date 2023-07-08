import { IdentityDao } from '../dao';

export class IdentityService {
	identityDao: IdentityDao;

	constructor() {
		this.identityDao = new IdentityDao();
	}
	async identify(email: string, phoneNumber: string) {
		try {
			const result = await this.identityDao.identify(
				email,
				phoneNumber
			);
			return result;
		} catch (error) {
			throw error;
		}
	}
}
