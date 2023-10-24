const DELAY = 500;

const generateRandomNumber = (min, max) => {
  const minNumber = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const maxNumber = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;

  return Math.floor(randomNumber);
};

const getRandomElement = (elements) => elements[generateRandomNumber(0, elements.length - 1)];

const getItemById = (id, items) => items.find((item) => item.id === id);

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = DELAY) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), timeoutDelay);
  };
};

export {generateRandomNumber, getRandomElement, getItemById, isEscapeKey, debounce};
