import {getFilesArrayInDir, parseFilesArray} from '../helpers/parser.js';
import { getUserData } from './auth.controller.js';

export async function getStats(req) {
  try {
    const userInfo = req.body.userInfo;

    if (userInfo) {
      const data = await getUserData(userInfo.token);

      if (data.family_name !== userInfo.family_name) {
        throw 'Не верный токен пользователя';
      }

      const files = getFilesArrayInDir('./test_data/');
      const result = parseFilesArray(files, userInfo);

      return {
        status: true,
        body: result
      };
    } else {
      throw 'Не переданы данные для поиска';
    }
  } catch (error) {
    return {
      status: false,
      error
    };
  }
}
