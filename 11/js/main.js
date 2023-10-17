import {openPicture} from './picture-modal.js';
import {getItemById} from './utils.js';
import {renderPictures} from './pictures.js';
import {getData} from './api.js';
import {showAlert} from './message.js';
import './upload-form.js';

const picturesElement = document.querySelector('.pictures');

const pictureClickHandler = (evt, photos) => {
  const pictureElement = evt.target.closest('.picture');

  if (pictureElement) {
    const photo = getItemById(Number(pictureElement.getAttribute('data-id')), photos);

    if (photo) {
      openPicture(photo);
    }
  }
};

getData()
  .then((data) => {
    renderPictures(data, picturesElement);
    picturesElement.addEventListener('click', (evt) => pictureClickHandler(evt, data));
  })
  .catch((error) => {
    showAlert(error);
  });

