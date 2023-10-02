export const renderPictures = (data, container) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  for (const item of data) {
    const pictureElement = pictureTemplate.cloneNode(true);
    const {url, likes, comments} = item;

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    fragment.append(pictureElement);
  }
  container.append(fragment);
};
