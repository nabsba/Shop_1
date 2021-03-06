// Note: put .env file in dist.
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });
import express from 'express';
import cors from 'cors'; // Local && share hosted
// import session from 'express-session';
// import { redisConfig } from './model/config/redis'; centos - local
import path from 'path';
import { createServer } from 'http';
import https from 'https';
import fs from 'fs';
import { data, fileManager } from './controler';
import { LOG_MESSAGE, PORTS } from './model/service/Common/constant';
import { logMessage } from './model/service/Common/logic/functions/function';
// yarn add socket.io --save

//Config
const app = express();
const options =
  process.env.DEVELOPMENT && process.env.HTTPS_LOCAL === 'true'
    ? {
        key: fs.readFileSync(path.join(__dirname, '../security/key.pem')),
        cert: fs.readFileSync(path.join(__dirname, '../security/cert.pem')),
      }
    : {};
// to receive post data from clients
app.use(express.json());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../../../../frontend/build/')));
app.use(cors());

//Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../../frontend/build/', 'index.html'));
});
app.use('/data', data);
app.use('/fileManager', fileManager);
app.get('/test', (req, res) => {
  res.send('Your test has worked');
});

app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../../frontend/build/', 'index.html'));
});

const PORT = process.env.PORT
  ? process.env.PORT
  : process.env.HOST_PORT
  ? PORTS[process.env.HOST_PORT]
  : null;
const isHTTPS = process.env.HTTPS_LOCAL === 'true' && process.env.DEVELOPMENT === 'true';
const httpsServer = isHTTPS ? https.createServer(options, app) : createServer(app);

httpsServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  logMessage(`${LOG_MESSAGE.SERVER_ON} ${PORT} using ${isHTTPS ? 'https' : 'http'}`);
});
