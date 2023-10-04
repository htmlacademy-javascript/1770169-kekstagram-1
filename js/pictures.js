const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const renderPictures = (data, container) => {
  const fragment = document.createDocumentFragment();

  for (const item of data) {
    const pictureElement = pictureTemplate.cloneNode(true);
    const imageElement = pictureElement.querySelector('.picture__img');
    const {id, url, likes, comments, description} = item;

    imageElement.src = url;
    imageElement.alt = description;
    imageElement.id = id;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    fragment.append(pictureElement);
  }
  container.append(fragment);
};
