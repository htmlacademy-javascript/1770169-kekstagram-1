export const renderComments = (comments, container, countComments) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < Math.min(comments.length, countComments); i++) {
    const commentElement = container.children[0].cloneNode(true);
    const {avatar, message, name} = comments[i];
    const avatarElement = commentElement.querySelector('.social__picture');

    avatarElement.src = avatar;
    avatarElement.alt = name;
    commentElement.querySelector('.social__text').textContent = message;

    fragment.append(commentElement);
  }
  container.innerHTML = '';
  container.append(fragment);
};
