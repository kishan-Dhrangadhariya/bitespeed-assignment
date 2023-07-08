import express, { Express } from 'express';
import  {router} from './routes/route';
// import dotenv from 'dotenv';

// dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? '8080';

app.use('/', router);

app.listen(port, () => {
	console.log(
		`⚡️[server]: Server is running at http://localhost:${port}`
	);
});
