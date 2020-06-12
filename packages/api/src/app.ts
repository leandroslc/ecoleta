import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/static', express.static(path.resolve(__dirname, '..', 'static')));
app.use(errors());

export default app;
