import {getRandomElement} from './utils.js';

const Filter = {
  FILTER_DEFAULT: 'filter-default',
  FILTER_RANDOM: 'filter-random',
  FILTER_DISCUSSED: 'filter-discussed',
};

const COUNT_PHOTO = 10;

const filtersElement = document.querySelector('.img-filters__form');
const buttonElements = document.querySelectorAll('.img-filters__button');

const getRandomPhotos = (photos) => {
  const randomPhotos = new Set();
  while (randomPhotos.size !== COUNT_PHOTO) {
    randomPhotos.add(getRandomElement(photos));
  }
  return randomPhotos;
};

const sortPhotoComments = (firstElement, secondElement) => secondElement.comments.length - firstElement.comments.length;

const getTopDiscussedPhotos = (photos) => photos.slice().sort(sortPhotoComments);

const filtersClickHandler = (evt) => {
  const buttonElement = evt.target;

  if (buttonElement.matches('.img-filters__button')) {
    buttonElements.forEach((element) => element.classList.remove('img-filters__button--active'));
    buttonElement.classList.add('img-filters__button--active');

    switch (buttonElement.id) {
      case Filter.FILTER_RANDOM:
        getRandomPhotos();
        break;
      case Filter.FILTER_DISCUSSED:
        getTopDiscussedPhotos();
        break;
      default:
        console.log(Filter.FILTER_DEFAULT);
    }
  }
};

filtersElement.addEventListener('click', filtersClickHandler);

export {getRandomPhotos, getTopDiscussedPhotos};
