import {generateNumber, generateRandomNumber, getRandomElement} from './utils.js';

const PHOTO_COUNT = 25;
const Like = {
  MIN: 15,
  MAX: 200
};
const Avatar = {
  MIN: 1,
  MAX: 6
};
const Comment = {
  MIN: 1,
  MAX: 5
};
const IMAGE_DESCRIPTIONS = [
  'Озеро, песчанный берег, отель и лес',
  'Указатель, направление к пляжу',
  'Океан, песчанный берег, камни',
  'Девушка в купальнике и с фотоапаратом',
  'Блюдо дня',
  'Черная машина с открытой дверью',
  'Аппетитная клубничка',
  'Морсик',
  'Пляж, самолет идет на посадку',
  'Обувница',
  'Песчанный берег',
  'Белая ауди',
  'Блюдо, рыба с овощами',
  'Кото-суши',
  'Тапки будущего',
  'Самолет на большой высоте над горами',
  'Хор на репетиции',
  'Красная машина',
  'Тапки с подсветкой',
  'Гостиница, пальмы, вечер',
  'Аппетитное блюдо',
  'Океан, волны, садится солнце над горизонтом',
  'Краб',
  'Концерт, зрители, сценарий',
  'Гиппопотам'
];
const USER_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const USER_NAMES = [
  'Александр',
  'Виктория',
  'Николай',
  'Мария',
  'Владимир',
  'Людмила'
];

const getNumber = generateNumber();
const getId = generateNumber();

const createComment = () => ({
  id: getId(),
  avatar: `img/avatar-${generateRandomNumber(Avatar.MIN, Avatar.MAX)}.svg`,
  message: getRandomElement(USER_MESSAGES),
  name: getRandomElement(USER_NAMES)
});

const createPhoto = () => {
  const number = getNumber();
  const commentsCount = generateRandomNumber(Comment.MIN, Comment.MAX);

  return {
    id: number,
    url: `photos/${number}.jpg`,
    description: IMAGE_DESCRIPTIONS[number - 1],
    likes: generateRandomNumber(Like.MIN, Like.MAX),
    comments: Array.from({length: commentsCount}, createComment)
  };
};

export const photos = Array.from({length: PHOTO_COUNT}, createPhoto);
