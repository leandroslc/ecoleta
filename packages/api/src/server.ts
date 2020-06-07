import app from './app';
import constants from './config/constants';
import { initializeDatabase } from './database';

initializeDatabase();

app.listen(constants.Port);
