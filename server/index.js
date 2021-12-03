import express from "express";
import bodyParser from 'body-parser';
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

app.use(bodyParser.json())

app.get('/', async (req, res) => {
  const { data } = await getToken('ovechkin', 'jau4maeQuu');
  const { data: userInfo } = await getUserData(data.access_token);

  // const files = getFilesArrayInDir('./test_data/');
  // const result = parseFilesArray(files.slice(0, 5));

  // let html = '';
  // result.forEach(item => {
  //   item.content.forEach(content => {
  //     html += `<p>${content}</p>`;
  //   })
  // })

  res.send(userInfo);
});

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
