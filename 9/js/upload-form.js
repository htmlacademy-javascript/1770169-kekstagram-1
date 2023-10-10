import {pristine} from './validate.js';
import {isEscapeKey} from './utils.js';

const bodyElement = document.querySelector('body');
const uploadForm = bodyElement.querySelector('.img-upload__form');
const uploadFieldElement = uploadForm .querySelector('.img-upload__input');
const uploadOverlayElement = uploadForm .querySelector('.img-upload__overlay');
const closeButtonElement = uploadOverlayElement .querySelector('.img-upload__cancel');

const closeImage = () => {
  uploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  uploadFieldElement.value = '';
  document.removeEventListener('keydown', imageCloseKeydownHandler);
};

const openImage = () => {
  uploadOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', imageCloseKeydownHandler);
};

const uploadFieldChangeHandler = () => {
  openImage();
};

const closeButtonClickHandler = () => {
  closeImage();
};

function imageCloseKeydownHandler (evt) {
  const focused = document.activeElement.tagName.toLowerCase();
  if (isEscapeKey(evt) && focused !== 'input' && focused !== 'textarea') {
    closeImage();
  }
}

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  if (!pristine.validate()) {
    // eslint-disable-next-line
    console.log('Ошибка валидации!');
  }
};

uploadFieldElement.addEventListener('change', uploadFieldChangeHandler);
closeButtonElement.addEventListener('click', closeButtonClickHandler);
uploadForm.addEventListener('submit', formSubmitHandler);
