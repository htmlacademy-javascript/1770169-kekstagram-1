import {isEscapeKey} from './utils.js';
import {bodyElement} from './elements.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const createMessage = (template) => {
  const messageElement = template.cloneNode(true);
  return messageElement;
};

const successMessage = createMessage(successTemplate);
const errorMessage = createMessage(errorTemplate);

const showSuccessMessage = () => {
  bodyElement.append(successMessage);
  const successButton = successMessage.querySelector('.success__button');
  successButton.addEventListener('click', successButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  document.addEventListener('click', documentClickHandler);
};

const showErrorMessage = () => {
  bodyElement.append(errorMessage);
  const errorButton = errorMessage.querySelector('.error__button');
  errorButton.addEventListener('click', errorButtonClickHandler);
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
  }, 3000);
  bodyElement.appendChild(alert);
};

function successButtonClickHandler () {
  hideMessage(successMessage);
}

function errorButtonClickHandler () {
  hideMessage(errorMessage);
}

function documentKeydownHandler (evt) {
  if (isEscapeKey(evt)) {
    if (bodyElement.contains(successMessage)) {
      hideMessage(successMessage);
      return;
    }

    hideMessage(errorMessage);
  }
}

function documentClickHandler (evt) {
  if (errorMessage === evt.target || successMessage === evt.target) {
    hideMessage(evt.target);
  }
}

export {showSuccessMessage, showErrorMessage, showAlert};
