import {openPicture} from './picture-modal.js';
import {getItemById} from './utils.js';
import {renderPictures} from './pictures.js';
import {photos} from './mocks.js';

const picturesElement = document.querySelector('.pictures');

const pictureClickHandler = (evt) => {
  const pictureElement = evt.target.closest('.picture');

  if (pictureElement) {
    const photo = getItemById(Number(pictureElement.getAttribute('data-id')), photos);

    if (photo) {
      openPicture(photo);
    }
  }
};

renderPictures(photos, picturesElement);

picturesElement.addEventListener('click', pictureClickHandler);
