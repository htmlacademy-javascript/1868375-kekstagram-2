// Вспомогательные функции

//Генерация случайного числа
export const getRandomInteger = (a,b) => {
  const minimum = Math.ceil(Math.min(a,b));
  const maximum = Math.floor(Math.max(a,b));
  const result = Math.random() * (maximum - minimum + 1) + minimum;
  return Math.floor(result);
};

//Генерация случайного элемента из массива
export const getRandomArrayElements = (el) => el[getRandomInteger(0, el.length - 1)];


//Генерация массива уникальных чисел
export const generateUniqueNumbers = (min, max) => {
  const length = max - min + 1;
  return Array.from({ length }, (_, i) => min + i);
};
