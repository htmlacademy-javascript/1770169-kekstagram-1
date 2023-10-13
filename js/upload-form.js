import {checkFormValidity} from './validate.js';
import {isEscapeKey} from './utils.js';
import {resetScale} from './scale.js';
import {resetSlider} from './effects.js';

const bodyElement = document.querySelector('body');
const uploadForm = bodyElement.querySelector('.img-upload__form');
const uploadFieldElement = uploadForm .querySelector('.img-upload__input');
const uploadOverlayElement = uploadForm .querySelector('.img-upload__overlay');
const closeButtonElement = uploadOverlayElement .querySelector('.img-upload__cancel');

const openImage = () => {
  uploadOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  closeButtonElement.addEventListener('click', closeButtonClickHandler);
  document.addEventListener('keydown', imageCloseKeydownHandler);
  uploadForm.addEventListener('submit', formSubmitHandler);
};

const closeImage = () => {
  uploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  uploadForm.reset();
  resetScale();
  resetSlider();
  closeButtonElement.removeEventListener('click', closeButtonClickHandler);
  document.removeEventListener('keydown', imageCloseKeydownHandler);
  uploadForm.removeEventListener('submit', formSubmitHandler);
};

const uploadFieldChangeHandler = () => {
  openImage();
};

function closeButtonClickHandler () {
  closeImage();
}

function imageCloseKeydownHandler (evt) {
  const focused = document.activeElement.tagName.toLowerCase();
  if (isEscapeKey(evt) && focused !== 'input' && focused !== 'textarea') {
    closeImage();
  }
}

function formSubmitHandler (evt) {
  if (!checkFormValidity()) {
    evt.preventDefault();
  }
}

uploadFieldElement.addEventListener('change', uploadFieldChangeHandler);
