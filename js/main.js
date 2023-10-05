import {openPicture} from './picture-modal.js';
import {getPictureById} from './utils.js';
import {renderPictures} from './pictures.js';
import {photos} from './mocks.js';

const picturesElement = document.querySelector('.pictures');

const pictureClickHandler = (evt) => {
  if (evt.target.matches('.picture__img')) {
    const photo = getPictureById(Number(evt.target.getAttribute('data-id')), photos);

    if (!photo) {
      return 'Фото не найдено';
    }
    openPicture(photo);
  }
};

renderPictures(photos, picturesElement);

picturesElement.addEventListener('click', pictureClickHandler);
