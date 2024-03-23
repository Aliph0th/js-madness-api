import { json } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { BASE_ENDPOINT } from './constants';
import router from './router';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(json());

app.use(BASE_ENDPOINT, router);

app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT} 🚀`);
});
