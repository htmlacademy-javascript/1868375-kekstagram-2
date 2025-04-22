import { getRandomInteger, generateUniqueNumbers, getRandomArrayElements } from './utils.js';
import {
  COMMENT_ID_MIN, COMMENT_ID_MAX,
  MESSAGE_COUNT_MIN, MESSAGE_COUNT_MAX,
  AVATAR_INDEX_MIN, AVATAR_INDEX_MAX
} from './constants.js';
import { MESSAGES, NAMES} from './data.js';

const uniqueCommentIds = generateUniqueNumbers(COMMENT_ID_MIN, COMMENT_ID_MAX);

let commentIdIndex = 0;

//Генерация соддержимого комментария с 1 или 2 сообщениями
export const createComment = () => {
  const messageCount = getRandomInteger(MESSAGE_COUNT_MIN, MESSAGE_COUNT_MAX); //Генерация случайного количества из 2-х сообщений
  const message = Array.from({length: messageCount}, () => getRandomArrayElements(MESSAGES)); //передаем в массив случайные предложения из массива MESSAGES

  return {
    id: uniqueCommentIds[commentIdIndex++], //Уникальный идентификатор комментария.
    avatar: `img/avatar-${getRandomInteger(AVATAR_INDEX_MIN, AVATAR_INDEX_MAX)}.svg`, //Ссылка на аватар комментатора.
    message: message.join(' '), //Склеиваем массив сообщений в одну строку.
    name: getRandomArrayElements(NAMES), //Имя комментатора.
  };
};
