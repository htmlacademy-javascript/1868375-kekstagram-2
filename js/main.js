const PHOTO_COUNT = 25;

const PHOTO_ID_MIN = 1; //id не должны повторяться
const PHOTO_ID_MAX = 25;

const PHOTO_URL_MIN = 1; //не должны повторяться
const PHOTO_URL_MAX = 25;

const LIKES_MIN = 15;
const LIKES_MAX = 200;

const COMMENT_COUNT_MIN = 0;
const COMMENT_COUNT_MAX = 30;

const COMMENT_ID_MIN = 1; //id не должны повторяться
const COMMENT_ID_MAX = 1000;

const AVATAR_INDEX_MIN = 1;
const AVATAR_INDEX_MAX = 6;

const MESSAGE_COUNT_MIN = 1;
const MESSAGE_COUNT_MAX = 2;

const MESSAGES = [
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

//Список имен
const NAMES = ['Иван', 'Мария', 'Таня', 'Кристоф', 'Виктор', 'Юлия', 'Лилия', 'Валера', 'Юля', 'Андрей', 'Сергей', 'Алексей'];

//Список описаний фотографий
const DESCRIPTIONS = [
  'Изображение моря и пляжа',
  'Изображение девушки с фотоаппаратом',
  'Изображение блюда с рисом',
  'Изображение черной машины',
  'Изображение дрона',
  'Изображение котика',
  'Изображение самолета'
];

//Генерация случайного числа
const getRandomInteger = (a,b) => {
  const minimum = Math.ceil(Math.min(a,b));
  const maximum = Math.floor(Math.max(a,b));
  const result = Math.random() * (maximum - minimum + 1) + minimum;
  return Math.floor(result);
};

//Генерация массива уникальных чисел
const generateUniqueNumbers = (min, max) => {
  const length = max - min + 1;
  return Array.from({ length }, (_, i) => min + i);
};

//Генерация случайного элемента из массива
const getRandomArrayElements = (el) => el[getRandomInteger(0, el.length - 1)];

// Генерируем уникальные ID
const uniquePhotoIds = generateUniqueNumbers(PHOTO_ID_MIN, PHOTO_ID_MAX);
const uniquePhotoUrls = generateUniqueNumbers(PHOTO_URL_MIN, PHOTO_URL_MAX);
const uniqueCommentIds = generateUniqueNumbers(COMMENT_ID_MIN, COMMENT_ID_MAX);

// Счётчики для ID
let photoIdIndex = 0;
let photoUrlIndex = 0;
let commentIdIndex = 0;

//Генерация соддержимого комментария с 1 или 2 сообщениями
const createComment = () => {
  const messageCount = getRandomInteger(MESSAGE_COUNT_MIN, MESSAGE_COUNT_MAX); //Генерация случайного количества из 2-х сообщений
  const message = Array.from({length: messageCount}, () => getRandomArrayElements(MESSAGES)); //передаем в массив случайные предложения из массива MESSAGES

  return {
    id: uniqueCommentIds[commentIdIndex++], //Уникальный идентификатор комментария.
    avatar: `img/avatar-${getRandomInteger(AVATAR_INDEX_MIN, AVATAR_INDEX_MAX)}.svg`, //Ссылка на аватар комментатора.
    message: message.join(' '), //Склеиваем массив сообщений в одну строку.
    name: getRandomArrayElements(NAMES), //Имя комментатора.
  };
};

//Генерация содержимого фото
const createPhoto = () => ({
  id: uniquePhotoIds[photoIdIndex++],
  url: `photos/${uniquePhotoUrls[photoUrlIndex++]}.jpg`,
  description: getRandomArrayElements(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from({length: getRandomInteger(COMMENT_COUNT_MIN, COMMENT_COUNT_MAX)}, createComment) //Массив комментариев.
});

//Генерация массива фото
const createPhotos = () => Array.from({length: PHOTO_COUNT}, createPhoto);
createPhotos();

