import {photos} from './mocks.js';
import {getTemplate} from './utils.js';

const pictureTemplate = getTemplate('#picture', '.picture');
const fragment = document.createDocumentFragment();

for (const photo of photos) {
  const pictureElement = pictureTemplate.cloneNode(true);
  const {url, likes, comments} = photo;

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  fragment.append(pictureElement);
}

export {fragment};
