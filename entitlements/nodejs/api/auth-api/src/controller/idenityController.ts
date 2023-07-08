import { Request, Response } from 'express';
import { IdentityService } from '../services';

interface IdentityRequest {
	email: string;
	phoneNumber: string;
}

export const identityController = async (req: Request, res: Response) => {
	try {
		const body: IdentityRequest = req.body;
		const identityService = new IdentityService();
		const response = await identityService.identify(
			body.email,
			body.phoneNumber
		);
		res.status(200).send(response);
	} catch (e) {
		if (e instanceof SyntaxError || e instanceof TypeError) {
			res.status(400).send({
				error: 'Invalid JSON payload passed.',
			});
		} else {
			res.status(500).send({ 
                error: 'Internal Server Error' 
            });
		}
	}
};
