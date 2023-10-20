const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsElement = document.querySelector('.social__comments');
const commentsCountElement = document.querySelector('.comments-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
const currentComments = document.querySelector('.current-comments');

const getCommentElement = ({avatar, message, name}) => {
  const commentElement = commentTemplate.cloneNode(true);
  const avatarElement = commentElement.querySelector('.social__picture');

  avatarElement.src = avatar;
  avatarElement.alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

export const renderComments = (comments, countComments) => {
  const fragment = document.createDocumentFragment();
  const shownCommentsAmount = Math.min(comments.length, countComments);

  for (let i = 0; i < shownCommentsAmount; i++) {
    fragment.append(getCommentElement(comments[i]));
  }
  commentsCountElement.textContent = comments.length;
  currentComments.textContent = shownCommentsAmount;

  if (comments.length <= countComments) {
    commentsLoaderElement.classList.add('hidden');
  }
  commentsElement.innerHTML = '';
  commentsElement.append(fragment);
};
