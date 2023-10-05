import {openPicture} from './picture-modal.js';
import {getItemById} from './utils.js';
import {renderPictures} from './pictures.js';
import {photos} from './mocks.js';

const picturesElement = document.querySelector('.pictures');

const pictureClickHandler = (evt) => {
  const parent = evt.target.closest('.picture');

  if (parent) {
    const photo = getItemById(Number(parent.getAttribute('data-id')), photos);

    if (photo) {
      openPicture(photo);
    }
  }
};

renderPictures(photos, picturesElement);

picturesElement.addEventListener('click', pictureClickHandler);
