import {getFilesArrayInDir, parseFilesArray} from '../helpers/parser.js';

export async function getStats(req) {
  try {
    const userInfo = req.body.userInfo;

    if (userInfo) {
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
