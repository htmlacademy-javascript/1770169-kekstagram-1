import {renderComments} from './comments.js';
import {renderBigPicture} from './big-picture.js';
import {isEscapeKey} from './utils.js';

const bodyElement = document.querySelector('body');
const bigPictureElement = bodyElement.querySelector('.big-picture');
const pictureCloseElement = bigPictureElement.querySelector('.big-picture__cancel');

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
};

const pictureCloseClickHandler = () => {
  closePicture();
  document.removeEventListener('keydown', pictureCloseKeydownHandler);
};

function pictureCloseKeydownHandler (evt) {
  if (isEscapeKey(evt)) {
    closePicture();
    document.removeEventListener('keydown', pictureCloseKeydownHandler);
  }
}

pictureCloseElement.addEventListener('click', pictureCloseClickHandler);

export {openPicture};
