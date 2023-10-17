import {isEscapeKey} from './utils.js';

const bodyElement = document.querySelector('body');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const createMessage = (template) => {
  const messageElement = template.cloneNode(true);
  return messageElement;
};

const successMessage = createMessage(successTemplate);
const errorMessaage = createMessage(errorTemplate);

const showSuccessMessage = () => {
  bodyElement.append(successMessage);
  const successButton = successMessage.querySelector('.success__button');
  successButton.addEventListener('click', successButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  document.addEventListener('click', documentClickHandler);
};

const showErrorMessage = () => {
  bodyElement.append(errorMessaage);
  const errorButton = errorMessaage.querySelector('.error__button');
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
  hideMessage(errorMessaage);
}

function documentKeydownHandler (evt) {
  if (isEscapeKey(evt)) {
    if (bodyElement.contains(successMessage)) {
      hideMessage(successMessage);
      return;
    }

    hideMessage(errorMessaage);
  }
}

function documentClickHandler (evt) {
  if (errorMessaage === evt.target || successMessage === evt.target) {
    hideMessage(evt.target);
  }
}

export {showSuccessMessage, showErrorMessage, showAlert};
