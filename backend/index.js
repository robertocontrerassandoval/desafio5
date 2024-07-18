import express from 'express';
import cors from 'cors';
import router from '../backend/src/routes/routes.js';
import { serverLog } from './src/middlewere/logger.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/', router);
app.use(serverLog);

app.listen(PORT, () => {
    console.log(`🚨🚨 servidor encendido 🚨🚨 http://localhost:${PORT}`)
})