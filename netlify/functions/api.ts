import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';
import serverless from 'serverless-http';
import { BASE_ENDPOINT } from '../../src/constants';
import router from '../../src/router';

const api = express();

api.use(helmet());
api.use(cors());
api.use(json());

api.use(BASE_ENDPOINT, router);

export const handler = serverless(api);
