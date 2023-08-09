import dotenv from 'dotenv';
import type { Application } from 'express';
import express from 'express';
import api from './routes/api';

dotenv.config();

const app: Application = express();

app.use('/api', api);

app.listen(parseInt(process.env.PORT ?? '8080'));
