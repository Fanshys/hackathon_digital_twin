import axios from 'axios';
import qs from 'qs';

async function getToken(login, password) {
  const data = qs.stringify({
    'client_id': 'tvscp',
    'client_secret': 'f3e94369-53ac-43d5-842e-09fe6d8a71ff',
    'grant_type': 'password',
    'username': login,
    'password': password,
    'scope': 'openid'
  });

  const config = {
    method: 'post',
    url: 'https://tvscp.tionix.ru/realms/master/protocol/openid-connect/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };

  return await axios(config);
}

export async function getUserData(token) {
  const config = {
    method: 'get',
    url: 'https://tvscp.tionix.ru/realms/master/protocol/openid-connect/userinfo',
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  const {data} = await axios(config);

  return {
    ...data,
    token
  };
}

export async function login(req, res) {
  const login = req.body.login;
  const password = req.body.password;

  try {
    if (login && password) {
      const { data } = await getToken(login, password);
      const userInfo = await getUserData(data.access_token);

      return {
        status: true,
        body: userInfo
      };
    } else {
      throw 'Не передан логин или пароль';
    }
  } catch (error) {
    return {
      status: false,
      error: error.response && error.response.status === 401 ? 'Переданы не верные данные для входа' : error,
    };
  }
}
