import {renderPictures} from './pictures.js';
import {photos} from './mocks.js';
import {pictureClickHandler} from './picture-modal.js';

const picturesElement = document.querySelector('.pictures');

renderPictures(photos, picturesElement);

picturesElement.addEventListener('click', pictureClickHandler);
