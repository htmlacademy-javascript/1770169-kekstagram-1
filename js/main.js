const NUMBER_OF_COPIES = 25;
const NIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_NUMBER = 1;
const MAX_NUMBER = 6;
const IMAGES_DESCRIPTION = [
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

const generateNumber = () => {
  let number = 0;

  return function() {
    number += 1;
    return number;
  };
};

const getNumber = generateNumber();
const getId = generateNumber();

const generateRandomNumber = (min, max) => {
  const minNumber = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const maxNumber = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;

  return Math.floor(randomNumber);
};

const getRandomElement = (elements) => elements[generateRandomNumber(0, elements.length - 1)];

const createComment = () => ({
  id: getId(),
  avatar: `img/avatar-${generateRandomNumber(MIN_NUMBER, MAX_NUMBER)}.svg`,
  message: getRandomElement(USER_MESSAGES),
  name: getRandomElement(USER_NAMES)
});

const createFotoDescription = () => {
  const number = getNumber();
  const commentsCount = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);

  return {
    id: number,
    url: `photos/${number}.jpg`,
    description: IMAGES_DESCRIPTION[number - 1],
    likes: generateRandomNumber(NIN_LIKES, MAX_LIKES),
    comments: Array.from({length: commentsCount}, createComment)
  };
};

const fotosDescription = Array.from({length: NUMBER_OF_COPIES}, createFotoDescription);

export default {fotosDescription};
