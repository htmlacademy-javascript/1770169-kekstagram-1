import {renderComments} from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const imageElement = bigPictureElement.querySelector('.big-picture__img').children[0];
const likesElement = bigPictureElement.querySelector('.likes-count');
const commentsElement = bigPictureElement.querySelector('.social__comments');

const socialCommentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsCountElement = socialCommentCountElement.querySelector('.comments-count');

export const renderBigPicture = (pictureData, countComments) => {
  const {url, description, likes, comments} = pictureData;

  imageElement.src = url;
  imageElement.alt = description;
  likesElement.textContent = likes;
  socialCommentCountElement.firstChild.nodeValue = `${Math.min(comments.length, countComments)} из `;
  commentsCountElement.textContent = comments.length;
  renderComments(comments, commentsElement, countComments);
};
