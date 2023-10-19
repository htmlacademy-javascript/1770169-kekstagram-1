import {getRandomElement} from './utils.js';

const Filter = {
  FILTER_DEFAULT: 'filter-default',
  FILTER_RANDOM: 'filter-random',
  FILTER_DISCUSSED: 'filter-discussed',
};

const COUNT_PHOTO = 10;

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
  if (filterType === Filter.FILTER_RANDOM) {
    return getRandomPhotos(photos);
  } else if (filterType === Filter.FILTER_DISCUSSED) {
    return getTopDiscussedPhotos(photos);
  } else {
    return photos;
  }
};

export {getSortedPhotos};
