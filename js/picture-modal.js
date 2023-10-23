import {renderComments} from './comments.js';
import {renderBigPicture} from './big-picture.js';
import {isEscapeKey, getItemById} from './utils.js';
import {bodyElement, picturesElement, bigPictureElement} from './elements.js';

const COMMENTS_COUNT = 5;
let currentCount = COMMENTS_COUNT;
let comments = [];

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

const pictureClickHandler = (evt, photos) => {
  const pictureElement = evt.target.closest('.picture');

  if (pictureElement) {
    const photo = getItemById(Number(pictureElement.getAttribute('data-id')), photos);

    if (photo) {
      openPicture(photo);
    }
  }
};

closeButtonElement.addEventListener('click', pictureCloseClickHandler);
commentsLoaderElement.addEventListener('click', loadMoreClickHandler);

const initPictures = (data) => {
  picturesElement.addEventListener('click', (evt) => pictureClickHandler(evt, data));
};

export {initPictures};
