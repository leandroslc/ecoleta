import app from './app';
import constants from './config/constants';
import { createConnection } from './database';

createConnection();

app.listen(constants.Port);
