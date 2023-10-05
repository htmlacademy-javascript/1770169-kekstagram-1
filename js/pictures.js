const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPicture = ({id, url, likes, comments, description}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const imageElement = pictureElement.querySelector('.picture__img');

  imageElement.src = url;
  imageElement.alt = description;
  pictureElement.dataset.id = id;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  return pictureElement;
};

export const renderPictures = (data, container) => {
  const fragment = document.createDocumentFragment();

  for (const item of data) {
    fragment.append(createPicture(item));
  }
  container.append(fragment);
};
