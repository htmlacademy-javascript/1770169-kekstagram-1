import {openPicture} from './picture-modal.js';
import {getItemById} from './utils.js';
import {renderPictures} from './pictures.js';
import {getData} from './api.js';
import {showAlert} from './messages.js';
import './upload-form.js';
import './filters.js';

const picturesElement = document.querySelector('.pictures');
const filterElement = document.querySelector('.img-filters');

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
    filterElement.classList.remove('img-filters--inactive');
  })
  .catch((error) => {
    showAlert(error);
  });

