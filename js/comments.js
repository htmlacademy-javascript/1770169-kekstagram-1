const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsElement = document.querySelector('.social__comments');
const commentsCountElement = document.querySelector('.comments-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
const currentCommentsElement = document.querySelector('.current-comments');

let startIndex = 0;

const getCommentElement = ({avatar, message, name}) => {
  const commentElement = commentTemplate.cloneNode(true);
  const avatarElement = commentElement.querySelector('.social__picture');

  avatarElement.src = avatar;
  avatarElement.alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const renderComments = (comments, countComments) => {
  const fragment = document.createDocumentFragment();
  const shownCommentsAmount = Math.min(comments.length, countComments);

  for (let i = startIndex; i < shownCommentsAmount; i++) {
    fragment.append(getCommentElement(comments[i]));
  }
  startIndex = shownCommentsAmount;
  commentsCountElement.textContent = comments.length;
  currentCommentsElement.textContent = shownCommentsAmount;

  if (comments.length <= countComments) {
    commentsLoaderElement.classList.add('hidden');
  }
  commentsElement.append(fragment);
};

const clearComments = () => {
  startIndex = 0;
  commentsElement.innerHTML = '';
};

export {renderComments, clearComments};
