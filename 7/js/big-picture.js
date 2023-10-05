const bigPictureElement = document.querySelector('.big-picture');
const imageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesElement = bigPictureElement.querySelector('.likes-count');
const captionElement = bigPictureElement.querySelector('.social__caption');

export const renderBigPicture = (photo) => {
  const {url, description, likes} = photo;

  imageElement.src = url;
  imageElement.alt = description;
  likesElement.textContent = likes;
  captionElement.textContent = description;
};
