const Hashtag = {
  MAX_LENGTH: 20,
  MAX_COUNT: 5
};
const COMMENT_MAX_LENGTH = 140;

const uploadForm = document.querySelector('.img-upload__form');
const hashtagFiled = uploadForm.querySelector('.text__hashtags');
const commentFiled = uploadForm.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'text--error',
  successClass: 'text--success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'text__error-message'
});

const getArrayFromString = (value) => value.trim().split(' ').filter((item) => item.trim().length);

const validateHashtagCount = (value) => {
  const items = getArrayFromString(value);

  return items.length < Hashtag.MAX_COUNT;
};

const validateHashtagLength = (value) => {
  const items = getArrayFromString(value);

  return items.every((item) => item.length < Hashtag.MAX_LENGTH);
};

const validateHashtagUnique = (value) => {
  const items = getArrayFromString(value);
  const uniqueItems = new Set(items.map((item) => item.toLowerCase()));

  if (items.length !== uniqueItems.size) {
    return false;
  }

  return true;
};

const validateHashtagOnly = (value) => {
  const items = getArrayFromString(value);

  return items.every((item) => item.length !== 1);
};

const validateHashtagSingle = (value) => {
  const items = getArrayFromString(value);

  return items.every((item) => item[0] === '#');
};

const validateHashtagMatch = (value) => {
  const items = getArrayFromString(value);
  const regexp = /^[а-яёa-z0-9]+$/i;

  return items.every((item) => regexp.test(item.slice(1)));
};

const validateComments = (value) => value.length < COMMENT_MAX_LENGTH;

pristine.addValidator(hashtagFiled, validateHashtagCount, `Нельзя указать больше ${Hashtag.MAX_COUNT} хэш-тегов!`, 1, true);
pristine.addValidator(hashtagFiled, validateHashtagLength, `Максимальная длина одного хэш-тега ${Hashtag.MAX_LENGTH} символов, включая решётку!`, true);
pristine.addValidator(hashtagFiled, validateHashtagUnique,'Один и тот же хэш-тег не может быть использован дважды!', true);
pristine.addValidator(hashtagFiled, validateHashtagOnly,'Хеш-тег не может состоять только из одного символа #!', 3, true);
pristine.addValidator(hashtagFiled, validateHashtagSingle,'Хэш-тег начинается с символа #!', 4, true);
pristine.addValidator(hashtagFiled, validateHashtagMatch,'Строка после решётки должна состоять из букв и чисел!', true);
pristine.addValidator(commentFiled, validateComments, `Длина комментария не может составлять больше ${COMMENT_MAX_LENGTH} символов!`);

const checkFormValidity = () => pristine.validate();

export {checkFormValidity};
