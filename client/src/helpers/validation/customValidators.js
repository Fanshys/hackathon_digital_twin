const lettersAndSpaces = (string) => /^[a-zA-Zа-яА-Я ]+$/.test(string);

const phone = (string) => /^((\+7|7|8)+([0-9()-_ ]){10,18})$/.test(string);

export { lettersAndSpaces, phone };
