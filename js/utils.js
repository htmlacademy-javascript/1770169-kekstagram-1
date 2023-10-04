const generateNumber = () => {
  let number = 0;

  return function() {
    number += 1;
    return number;
  };
};

const generateRandomNumber = (min, max) => {
  const minNumber = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const maxNumber = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;

  return Math.floor(randomNumber);
};

const getRandomElement = (elements) => elements[generateRandomNumber(0, elements.length - 1)];

const getPictureById = (id, pictures) => {
  const result = pictures.filter((item) => item.id === id);
  if (result) {
    return result[0];
  }
  return null;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {generateNumber, generateRandomNumber, getRandomElement, getPictureById, isEscapeKey};
