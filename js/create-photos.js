import { getRandomInteger, generateUniqueNumbers, getRandomArrayElements } from './utils.js';
import {
  PHOTO_ID_MIN, PHOTO_ID_MAX,
  PHOTO_URL_MIN, PHOTO_URL_MAX,
  LIKES_MIN, LIKES_MAX,
  COMMENT_COUNT_MIN, COMMENT_COUNT_MAX,
  PHOTO_COUNT
} from './constants.js';
import { DESCRIPTIONS} from './data.js';
import { createComment } from './create-comment.js';

// Генерируем уникальные ID
const uniquePhotoIds = generateUniqueNumbers(PHOTO_ID_MIN, PHOTO_ID_MAX);
const uniquePhotoUrls = generateUniqueNumbers(PHOTO_URL_MIN, PHOTO_URL_MAX);

// Счётчики для ID
let photoIdIndex = 0;
let photoUrlIndex = 0;

//Генерация содержимого фото
const createPhoto = () => ({
  id: uniquePhotoIds[photoIdIndex++],
  url: `photos/${uniquePhotoUrls[photoUrlIndex++]}.jpg`,
  description: getRandomArrayElements(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from({length: getRandomInteger(COMMENT_COUNT_MIN, COMMENT_COUNT_MAX)}, createComment) //Массив комментариев.
});

//Генерация массива фото
export const createPhotos = () => Array.from({length: PHOTO_COUNT}, createPhoto);
