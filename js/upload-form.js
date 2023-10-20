import {checkFormValidity} from './validate.js';
import {isEscapeKey} from './utils.js';
import {resetScale} from './scale.js';
import {resetSlider} from './effects.js';
import {sendData} from './api.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';

const bodyElement = document.querySelector('body');
const uploadForm = bodyElement.querySelector('.img-upload__form');
const uploadFieldElement = uploadForm .querySelector('.img-upload__input');
const uploadOverlayElement = uploadForm .querySelector('.img-upload__overlay');
const closeButtonElement = uploadOverlayElement .querySelector('.img-upload__cancel');
const submitButton = uploadOverlayElement.querySelector('.img-upload__submit');
//const uploadImage = uploadOverlayElement.querySelector('.img-upload__preview img'); пока закоментил, до module12-task2

//let imageURL = ''; пока закоментил, до module12-task2

const openImage = () => {
  uploadOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  //uploadImage.src = imageURL; пока закоментил, до module12-task2
  closeButtonElement.addEventListener('click', closeButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  uploadForm.addEventListener('submit', formSubmitHandler);
};

const closeImage = () => {
  uploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  uploadForm.reset();
  resetScale();
  resetSlider();
  //URL.revokeObjectURL(imageURL); пока закоментил, до module12-task2
  closeButtonElement.removeEventListener('click', closeButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
  uploadForm.removeEventListener('submit', formSubmitHandler);
};

const uploadFieldChangeHandler = () => {
  //imageURL = URL.createObjectURL(evt.target.files[0]); пока закоментил, до module12-task2
  openImage();
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
    submitButton.disabled = true;

    sendData(formData)
      .then(() => {
        submitButton.disabled = false;
        showSuccessMessage();
        closeImage();
      })
      .catch(() => {
        submitButton.disabled = false;
        showErrorMessage();
      });
  }
}

uploadFieldElement.addEventListener('change', uploadFieldChangeHandler);
