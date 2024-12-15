//Функция для проверки длины строки
const checkingLengthFromUser = (line, maxLength) => {
  const userLine = line.length <= maxLength;
  return userLine;
};
checkingLengthFromUser('hello', 9);

//Функция для проверки, является ли строка палиндромом
const checkingPalindrom = (string) => {
  const processedString = string
    .toLowerCase() //Приводим строку к одному регистру
    .replaceAll(' ', ''); //Удаляем всех пробелы из строки без регулярных выражений

  let palindromString = '';
  for (let i = processedString.length - 1; i >= 0; i--) { //цикл переворачиваем строку наоборот
    palindromString += processedString[i]; //в переменную добавляем каждый символ
  }
  return palindromString === processedString; //перевёрнутую строку сравниваем с начальной
};
checkingPalindrom('Лёша на полке клопа нашёл');


/* Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN */
const extractionNumber = (str) => {
  const numbers = str.match(/\d+/g); //Ищем цифры, выдаются в виде массива строк и eсли цифры не найдены, возвращает null
  return numbers ? parseInt(numbers.join(''), 10) : NaN; //parseInt преобразует только первый елемент, поетому join() и проверка если цифры найдены, соединяем их и преобразуем в число
};
extractionNumber('odi25ndva45');
