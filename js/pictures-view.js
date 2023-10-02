import {photos} from './mocks.js';
import {getTemplate} from './utils.js';

const pictureTemplate = getTemplate('#picture', '.picture');
const fragment = document.createDocumentFragment();

for (const photo of photos) {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

  fragment.appendChild(pictureElement);
}

export {fragment};
