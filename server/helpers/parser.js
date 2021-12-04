import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';
import {analyze} from './analyze.js';

// Рекурсивно получаем все html файлы
export function getFilesArrayInDir(folder) {
  const files =  fs.readdirSync(folder);
  let result = [];

  files.forEach(fileName => {
    const filePath = path.join(folder, fileName);
    const isFolder = fs.statSync(filePath).isDirectory();

    if (isFolder) {
      result = [...result, ...getFilesArrayInDir(filePath)];
    } else if (validateFile(filePath)) {
      result.push(filePath);
    }
  });

  return result;
}

function validateFile(filePath) {
  return path.extname(filePath) === '.html';
}

function getProperty($, selector, attr) {
  const node = $(selector);

  if (node.length) {
    return node.attr(attr);
  }
}

// Парсим файл по искомой строке
function parseFile(filePath, searched, id) {
  const data = fs.readFileSync(filePath, 'utf8');

  if (data.includes(searched)) {
    const result = {
      id: id,
      img: '',
      mood: 0,
      link: '',
      icon: '',
      desc: '',
      title: '',
      previewDesc: '',
    };

    const $ = cheerio.load(data, null, false);
    $.html();

    // Поиск контекста, в котором упоминается искомая строка
    const elements = $(`:contains(${searched})`);
    let count = 0;

    while(elements.length >= count && !result.desc) {
      const el = elements[count];

      $(el).find('*').each((i, innerEl) => {
        const innerNode = $(innerEl).clone().children().remove().end();

        if(innerNode.text().includes(searched)) {
          result.desc = $(innerEl)
            .parent()
            .html()
            .replace(/<\/?[^>]+(>|$)/gi, " ")
            .replace(/ +/g, " ")
            .trim()
        }
      });

      count++;
    }

    // Краткий текст с искомой строкой
    if (result.desc && result.desc.length > 140) {
      const index = result.desc.indexOf(searched);
      const offset = (140 - searched.length) / 2;

      const leftOffset = index - offset > 0 ? index - offset : 0;
      const rightOffset = index + offset + searched.length > result.desc.length
        ? result.desc.length
        : index + offset + searched.length;

      result.previewDesc = result.desc.substr(leftOffset, rightOffset);
      result.previewDesc += '...';
    }

    // Определение тональности высказывания
    if (result.desc) {
      result.mood = analyze(result.desc).score;
    }

    // Поиск тайтла страницы
    const titleNode = $('title');
    if (titleNode.length) {
      result.title = titleNode.text().substr(0, 120);
    } else {
      const index = data.indexOf(searched);
      result.title = data
        .substr(index - 20, index + 20 + searched.length);
    }

    // Поиск фавиконки
    result.icon = getProperty($, 'link[rel="shortcut icon"]', 'href')
      || getProperty($, 'link[rel="icon"]', 'href');

    // Поиск картинки новости
    result.img = getProperty($, 'meta[property="og:image"]', 'content');

    // Поиск ссылки на сайт-источник
    result.link = getProperty($, 'link[rel="canonical"]', 'href');

    return result;
  }
}

// Обход и парсинг всех файлов
export function parseFilesArray(array, userInfo) {
  const result = [];
  let count = 1;

  array.forEach(filePath => {
    const content = parseFile(filePath, userInfo.family_name, count);
    if (content) {
      result.push({
        filePath,
        ...content
      });
    }

    count++;
  });

  return result;
}
