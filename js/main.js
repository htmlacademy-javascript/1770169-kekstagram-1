import {openPicture} from './picture-modal.js';
import {getItemById, debounce} from './utils.js';
import {renderPictures} from './pictures.js';
import {getData} from './api.js';
import {showAlert} from './messages.js';
import {getSortedPhotos} from './filters.js';
import './upload-form.js';

const DELAY = 500;

const picturesElement = document.querySelector('.pictures');
const filtersElement = document.querySelector('.img-filters');

const formElement = document.querySelector('.img-filters__form');
const buttonElements = document.querySelectorAll('.img-filters__button');

const pictureClickHandler = (evt, photos) => {
  const pictureElement = evt.target.closest('.picture');

  if (pictureElement) {
    const photo = getItemById(Number(pictureElement.getAttribute('data-id')), photos);

    if (photo) {
      openPicture(photo);
    }
  }
};

const filtersClickHandler = (evt, photos) => {
  const buttonElement = evt.target;
  const pictureElements = picturesElement.querySelectorAll('.picture');

  if (buttonElement.matches('.img-filters__button')) {
    buttonElements.forEach((element) => element.classList.remove('img-filters__button--active'));
    buttonElement.classList.add('img-filters__button--active');
    pictureElements.forEach((element) => element.remove());
    const sortedPhotos = getSortedPhotos(buttonElement.id, photos);
    debounce(() => renderPictures(sortedPhotos, picturesElement), DELAY);
  }
};

getData()
  .then((data) => {
    renderPictures(data, picturesElement);
    filtersElement.classList.remove('img-filters--inactive');
    formElement.addEventListener('click', (evt) => filtersClickHandler(evt, data));
    picturesElement.addEventListener('click', (evt) => pictureClickHandler(evt, data));
  })
  .catch((error) => {
    showAlert(error);
  });
