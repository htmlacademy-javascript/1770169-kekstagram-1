const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsElement = document.querySelector('.social__comments');
const commentsCountElement = document.querySelector('.comments-count');
const socialCommentCountElement = document.querySelector('.social__comment-count');
const commentsLoaderElement = document.querySelector('.comments-loader');

const createComment = ({avatar, message, name}) => {
  const commentElement = commentTemplate.cloneNode(true);
  const avatarElement = commentElement.querySelector('.social__picture');

  avatarElement.src = avatar;
  avatarElement.alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

export const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < comments.length; i++) {
    fragment.append(createComment(comments[i]));
  }
  commentsCountElement.textContent = comments.length;
  socialCommentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  commentsElement.innerHTML = '';
  commentsElement.append(fragment);
};
