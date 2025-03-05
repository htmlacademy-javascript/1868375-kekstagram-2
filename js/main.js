//Список сообщений
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

//Генерация случайного элемента из массива
const getRandomArrayElements = (el) => el[getRandomInteger(0, el.length - 1)];

//Генерация соддержимого комментария с 1 или 2 сообщениями
const createComment = () => {
  const messageCount = getRandomInteger(1,2); //Генерация случайного количества из 2-х сообщений
  const message = Array.from({length: messageCount}, () => getRandomArrayElements(MESSAGES)); //передаем в массив случайные предложения из массива MESSAGES

  return {
    id: getRandomInteger(1, 300), //Уникальный идентификатор комментария.
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`, //Ссылка на аватар комментатора.
    message: message.join(' '), //Склеиваем массив сообщений в одну строку.
    name: getRandomArrayElements(NAMES), //Имя комментатора.
  };
};

//Генерация содержимого фото
const createPhoto = () => ({
  id: getRandomInteger(1, 25), //идентификатор опубликованной фотографии. Это число от 1 до 25
  url: `photos/${getRandomInteger(1, 25)}.jpg`, //Ссылка на изображение, число от 1 до 25
  description: getRandomArrayElements(DESCRIPTIONS), //Описание фотографии.
  likes: getRandomInteger(15, 200), //Случайное число от 15 до 200.
  comments: Array.from({length: getRandomInteger(1,30)}, createComment) //Массив комментариев.
});

//Генерация массива фото
const createPhotos = () => Array.from({length: 4}, createPhoto);
createPhotos();
