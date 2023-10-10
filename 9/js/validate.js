const Hashtag = {
  MAX_LENGTH: 20,
  MAX_COUNT: 5
};
const COMMENT_MAX_LENGTH = 140;
let message = '';

const uploadForm = document.querySelector('.img-upload__form');
const heshtagFiled = uploadForm.querySelector('.text__hashtags');
const commentFiled = uploadForm.querySelector('.text__descriptio');

const pristine = new Pristine(uploadForm);

const validateHeshtag = (value) => {
  const items = value.split(' ');
  const regexp = /^[а-яёa-z0-9]+$/i;

  if (items.length > Hashtag.MAX_COUNT) {
    message = `Нельзя указать больше ${Hashtag.MAX_COUNT} хэш-тегов;`;
    return false;
  }

  for (let i = 0; i < items.length; i++) {
    switch(false) {
      case items[i][0] === '#':
        message = 'Хэш-тег начинается с символа #.';
        return false;
      case items[i].length !== 1:
        message = 'Хеш-тег не может состоять только из одного символа #.';
        return false;
      case items[i].length < Hashtag.MAX_LENGTH:
        message = `Максимальная длина одного хэш-тега ${Hashtag.MAX_LENGTH} символов, включая решётку.`;
        return false;
      case regexp.test(items[i].slice(1)):
        message = 'Строка после решётки должна состоять из букв и чисел.';
        return false;
      case items.slice(i + 1).every((item) => item !== items[i]):
        message = 'Один и тот же хэш-тег не может быть использован дважды.';
        return false;
    }
  }
  message = '';
  return true;
};

const validateComments = (value) => {
  if (value.length > COMMENT_MAX_LENGTH) {
    message = `Длина комментария не может составлять больше ${COMMENT_MAX_LENGTH} символов`;
    return false;
  }
  message = '';
  return true;
};

pristine.addValidator(heshtagFiled, validateHeshtag, message);
pristine.addValidator(commentFiled, validateComments, message);

export {pristine};
