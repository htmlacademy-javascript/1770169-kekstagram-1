import {renderPictures} from './pictures.js';
import {photos} from './mocks.js';

const picturesElement = document.querySelector('.pictures');

renderPictures(photos, picturesElement);
