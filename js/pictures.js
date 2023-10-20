import {debounce} from './utils.js';

const DELAY = 500;

const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const getPictureElement = ({id, url, likes, comments, description}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const imageElement = pictureElement.querySelector('.picture__img');

  imageElement.src = url;
  imageElement.alt = description;
  pictureElement.dataset.id = id;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  return pictureElement;
};

const renderPictures = (data) => {
  const pictureElements = picturesElement.querySelectorAll('.picture');
  const fragment = document.createDocumentFragment();

  pictureElements.forEach((element) => element.remove());
  for (const item of data) {
    fragment.append(getPictureElement(item));
  }
  picturesElement.append(fragment);
};

const debouncedRenderPicture = debounce(renderPictures, DELAY);

export {debouncedRenderPicture, renderPictures};
