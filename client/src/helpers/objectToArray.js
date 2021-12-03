/**
 * Converting object to array
 * @param {object} obj
 * @return {array}
 */
const objectToArray = (obj, keyName = 'name') => {
  const array = [];
  const values = Object.values(obj);
  Object.keys(obj).forEach((key, index) => {
    array.push({ [key]: values[index], [keyName]: key });
  });

  return array;
};

export default objectToArray;
