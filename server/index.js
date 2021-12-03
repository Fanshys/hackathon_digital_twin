import express from "express";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from "express-session";

import { getToken, getUserData } from "./api.js";
import { getFilesArrayInDir, parseFilesArray } from "./parser.js";

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

app.use(cookieParser());
app.use(session({
  secret: 'hackathon',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));


app.post('/api/auth/login/', async (req, res) => {
  try {
    const { data } = await getToken(req.body.login, req.body.password);
    const { data: userInfo } = await getUserData(data.access_token);

    res.send({
      status: true,
      body: userInfo
    });
  } catch (error) {
    res.send({
      status: false,
      error
    });
  }
});

app.post('/api/stats/', async (req, res) => {
  try {
    if (req.body.userInfo) {
      const files = getFilesArrayInDir('./test_data/');
      const result = parseFilesArray(files, req.body.userInfo);

      res.send({
        status: true,
        body: result
      });
    } else {
      throw 'Не переданы данные для поиска';
    }
  } catch (error) {
    res.send({
      status: false,
      error
    });
  }
});

app.listen(port, () => console.log(`http://localhost:${port}`));
