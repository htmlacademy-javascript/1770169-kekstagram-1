import {photos} from './mocks.js';
import {renderComments} from './comments.js';
import {renderBigPicture} from './big-picture.js';
import {getPictureById, isEscapeKey} from './utils.js';

const COMMENTS_COUNT = 5;
let picture = {};
let currentCount = COMMENTS_COUNT;

const bodyElement = document.querySelector('body');
const bigPictureElement = bodyElement.querySelector('.big-picture');
const commentsElement = bigPictureElement.querySelector('.social__comments');

const pictureCloseElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const socialCommentCountElement = bigPictureElement.querySelector('.social__comment-count');

const closePicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  currentCount = COMMENTS_COUNT;
};

const pictureCloseKeydownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    closePicture();
  }
};

const pictureCloseClickHandler = () => {
  closePicture();
  document.removeEventListener('keydown', pictureCloseKeydownHandler);
};

const loadMoreClickHandler = () => {
  const {comments} = picture;
  renderComments(comments, commentsElement, currentCount += COMMENTS_COUNT);
  socialCommentCountElement.firstChild.nodeValue = `${Math.min(comments.length, currentCount)} из `;
};

const pictureClickHandler = (evt) => {
  if (evt.target.matches('.picture__img')) {
    picture = getPictureById(Number(evt.target.id), photos);
    renderBigPicture(picture, currentCount);
    bigPictureElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    document.addEventListener('keydown', pictureCloseKeydownHandler);

    //commentsLoaderElement.classList.add('hidden');
    //socialCommentCountElement.classList.add('hidden');
  }
};

pictureCloseElement.addEventListener('click', pictureCloseClickHandler);

commentsLoaderElement.addEventListener('click', loadMoreClickHandler);

export {pictureClickHandler};
