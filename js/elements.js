const bodyElement = document.querySelector('body');
const picturesElement = bodyElement.querySelector('.pictures');
const formElement = picturesElement.querySelector('.img-upload__form');
const uploadImageElement = formElement.querySelector('.img-upload__preview img');
const bigPictureElement = bodyElement.querySelector('.big-picture');

export {
  bodyElement,
  formElement,
  uploadImageElement,
  picturesElement,
  bigPictureElement
};
