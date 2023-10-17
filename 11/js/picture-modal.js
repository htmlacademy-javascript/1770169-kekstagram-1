import {renderComments} from './comments.js';
import {renderBigPicture} from './big-picture.js';
import {isEscapeKey} from './utils.js';

const COMMENTS_COUNT = 5;
let currentCount = COMMENTS_COUNT;
let comments = [];

const bodyElement = document.querySelector('body');
const bigPictureElement = bodyElement.querySelector('.big-picture');
const closeButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');

const openPicture = (photo) => {
  comments = photo.comments;
  renderBigPicture(photo);
  renderComments(comments, currentCount);
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', documentKeydownHandler);
};

const closePicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  commentsLoaderElement.classList.remove('hidden');
  currentCount = COMMENTS_COUNT;
  document.removeEventListener('keydown', documentKeydownHandler);
};

const pictureCloseClickHandler = () => {
  closePicture();
};

function documentKeydownHandler (evt) {
  if (isEscapeKey(evt)) {
    closePicture();
  }
}

const loadMoreClickHandler = () => {
  renderComments(comments, currentCount += COMMENTS_COUNT);
};

closeButtonElement.addEventListener('click', pictureCloseClickHandler);
commentsLoaderElement.addEventListener('click', loadMoreClickHandler);

export {openPicture};
