import {debouncedRenderPictures} from './pictures.js';
import {getRandomElement} from './utils.js';
import {picturesElement} from './elements.js';

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const COUNT_PHOTO = 10;

const filtersElement = document.querySelector('.img-filters');
const formElement = document.querySelector('.img-filters__form');
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

const getSortedPhotos = (filterType, photos) => {
  if (filterType === Filter.RANDOM) {
    return getRandomPhotos(photos);
  } else if (filterType === Filter.DISCUSSED) {
    return getTopDiscussedPhotos(photos);
  } else {
    return photos;
  }
};

const filtersClickHandler = (evt, photos) => {
  const buttonElement = evt.target;

  if (buttonElement.matches('.img-filters__button')) {
    buttonElements.forEach((element) => element.classList.remove('img-filters__button--active'));
    buttonElement.classList.add('img-filters__button--active');
    const sortedPhotos = getSortedPhotos(buttonElement.id, photos);
    debouncedRenderPictures(sortedPhotos, picturesElement);
  }
};

const initFilters = (photos) => {
  filtersElement.classList.remove('img-filters--inactive');
  formElement.addEventListener('click', (evt) => filtersClickHandler(evt, photos));
};

export {initFilters};
