import express from "express";
import bodyParser from 'body-parser';

import authRouter from './routes/auth.routes.js';
import statsRouter from './routes/stats.routes.js';

const app = express();
const port = 3000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use(bodyParser.json());

app.use('/api', authRouter);

app.use('/api', statsRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
