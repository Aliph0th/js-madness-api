import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { json } from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(json());

app.get('/', (req, res) => {
   res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT} 🚀`);
});
