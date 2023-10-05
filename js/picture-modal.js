import {renderComments} from './comments.js';
import {renderBigPicture} from './big-picture.js';
import {isEscapeKey} from './utils.js';

const bodyElement = document.querySelector('body');
const bigPictureElement = bodyElement.querySelector('.big-picture');
const closeButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

const openPicture = (photo) => {
  const {comments} = photo;
  renderBigPicture(photo);
  renderComments(comments);
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', pictureCloseKeydownHandler);
};

const closePicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', pictureCloseKeydownHandler);
};

const pictureCloseClickHandler = () => {
  closePicture();
};

function pictureCloseKeydownHandler (evt) {
  if (isEscapeKey(evt)) {
    closePicture();
  }
}

closeButtonElement.addEventListener('click', pictureCloseClickHandler);

export {openPicture};
