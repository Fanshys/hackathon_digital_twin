import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';

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

function parseFile(filePath, searched) {
  const data = fs.readFileSync(filePath, 'utf8');

  if (data.includes(searched)) {
    const result = [];
    const $ = cheerio.load(data, null, false);
    $.html();

    $(`:contains(${searched})`).each((i, el) => {
      $(el).find('*').each((i, innerEl) => {
        const innerNode = $(innerEl).clone().children().remove().end();

        if(innerNode.text().includes(searched)) {
          result.push(
            $(innerEl)
              .parent()
              .text()
              .replace(/<\/?[^>]+(>|$)/gi, " ")
              .replace(/ +/g, " ")
              .trim()
              .replace(searched, `<span style="color: red; font-weight: bold;">${searched}</span>`)
          );
        }
      })
    });

    return result;
  }
}

export function parseFilesArray(array, userInfo) {
  const result = [];

  array.forEach(filePath => {
    const content = parseFile(filePath, userInfo.family_name);
    if (content) {
      result.push({
        filePath,
        content
      });
    }
  });

  return result;
}
