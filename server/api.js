import axios from "axios";
import qs from 'qs';

export async function getToken(login, password) {
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

  return axios(config);
}
