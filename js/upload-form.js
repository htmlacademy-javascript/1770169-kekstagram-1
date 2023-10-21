import {checkFormValidity} from './validate.js';
import {isEscapeKey} from './utils.js';
import {resetScale} from './scale.js';
import {resetSlider} from './effects.js';
import {sendData} from './api.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';
import {bodyElement, formElement} from './elements.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadFieldElement = formElement .querySelector('.img-upload__input');
const uploadOverlayElement = formElement .querySelector('.img-upload__overlay');
const closeButtonElement = uploadOverlayElement .querySelector('.img-upload__cancel');
const submitElement = uploadOverlayElement.querySelector('.img-upload__submit');
const imageElement = uploadOverlayElement.querySelector('.img-upload__preview img');
const previewsElement = uploadOverlayElement.querySelectorAll('.effects__preview');

let imageURL = '';

const openImage = () => {
  uploadOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  imageElement.src = imageURL;
  previewsElement.forEach((element) => {
    element.style.backgroundImage = `url(${imageURL})`;
  });
  closeButtonElement.addEventListener('click', closeButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  formElement.addEventListener('submit', formSubmitHandler);
};

const closeImage = () => {
  uploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  formElement.reset();
  resetScale();
  resetSlider();
  URL.revokeObjectURL(imageURL);
  closeButtonElement.removeEventListener('click', closeButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
  formElement.removeEventListener('submit', formSubmitHandler);
};

const checkFileType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((type) => fileName.endsWith(type));
};

const uploadFieldChangeHandler = (evt) => {
  const file = evt.target.files[0];

  if (checkFileType(file)) {
    imageURL = URL.createObjectURL(file);
    openImage();
  }
};

function closeButtonClickHandler () {
  closeImage();
}

function documentKeydownHandler (evt) {
  const errorElement = bodyElement.querySelector('.error');
  const focused = document.activeElement.tagName.toLowerCase();
  if (isEscapeKey(evt) && focused !== 'input' && focused !== 'textarea' && !errorElement) {
    closeImage();
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  if (checkFormValidity()) {
    const formData = new FormData(evt.target);
    submitElement.disabled = true;

    sendData(formData)
      .then(() => {
        submitElement.disabled = false;
        showSuccessMessage();
        closeImage();
      })
      .catch(() => {
        submitElement.disabled = false;
        showErrorMessage();
      });
  }
}

uploadFieldElement.addEventListener('change', uploadFieldChangeHandler);
