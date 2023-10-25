import {isEscapeKey} from './utils.js';
import {bodyElement} from './elements.js';

const DELAY = 3000;

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const successElement = successTemplate.cloneNode(true);
const errorElement = errorTemplate.cloneNode(true);

const showSuccessMessage = () => {
  bodyElement.append(successElement);
  const successButtonElement = successElement.querySelector('.success__button');
  successButtonElement.addEventListener('click', successButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  document.addEventListener('click', documentClickHandler);
};

const showErrorMessage = () => {
  bodyElement.append(errorElement);
  const errorButtonElement = errorElement.querySelector('.error__button');
  errorButtonElement.addEventListener('click', errorButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  document.addEventListener('click', documentClickHandler);
};

const hideMessage = (element) => {
  element.remove();
  document.removeEventListener('keydown', documentKeydownHandler);
  document.removeEventListener('click', documentClickHandler);
};

const showAlert = (errorText) => {
  const alert = document.createElement('div');
  alert.classList.add('alert-message');
  alert.textContent = errorText;
  setTimeout(() => {
    alert.remove();
  }, DELAY);
  bodyElement.appendChild(alert);
};

function successButtonClickHandler () {
  hideMessage(successElement);
}

function errorButtonClickHandler () {
  hideMessage(errorElement);
}

function documentKeydownHandler (evt) {
  if (isEscapeKey(evt)) {
    if (bodyElement.contains(successElement)) {
      hideMessage(successElement);
      return;
    }

    hideMessage(errorElement);
  }
}

function documentClickHandler (evt) {
  if (errorElement === evt.target || successElement === evt.target) {
    hideMessage(evt.target);
  }
}

export {showSuccessMessage, showErrorMessage, showAlert};
