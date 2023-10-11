const filterElement = document.querySelector('.img-upload__effect-level');
const sliderElement = filterElement.querySelector('.effect-level__slider');
const sliderFieldElement = filterElement.querySelector('.effect-level__value');
const effectsElement = document.querySelector('.effects__list');
const uploadImageElement = document.querySelector('.img-upload__preview img');

const Filters = {
  None: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const EFFECTS = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
};

const EFFECTS_VALUES = {
  none: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
};

noUiSlider.create(sliderElement, {...EFFECTS_VALUES.none, connect: 'lower'});

const openSlider = () => {
  filterElement.classList.remove('hidden');
};

const closeSlider = () => {
  uploadImageElement.removeAttribute('class');
  uploadImageElement.style.filter = null;
  filterElement.classList.add('hidden');
};

function effectsChangeHandler (evt) {
  if (evt.target.matches('.effects__radio')) {
    const value = evt.target.value;
    uploadImageElement.removeAttribute('class');
    uploadImageElement.classList.add(`effects__preview--${value}`);
    uploadImageElement.dataset.type = value;
    sliderElement.noUiSlider.updateOptions(EFFECTS_VALUES[value]);
  }
}

const resetSlider = () => sliderElement.noUiSlider.updateOptions(EFFECTS_VALUES.none);

sliderElement.noUiSlider.on('update', () => {
  const value = parseFloat(sliderElement.noUiSlider.get());
  const type = uploadImageElement.dataset.type;

  switch (type) {
    case Filters.None:
      closeSlider();
      break;
    case Filters.PHOBOS:
      openSlider();
      uploadImageElement.style.filter = `${EFFECTS[type]}(${value}px)`;
      sliderFieldElement.value = value;
      break;
    case Filters.MARVIN:
      openSlider();
      uploadImageElement.style.filter = `${EFFECTS[type]}(${value}%)`;
      sliderFieldElement.value = value;
      break;
    default:
      openSlider();
      uploadImageElement.style.filter = `${EFFECTS[type]}(${value})`;
      sliderFieldElement.value = value;
  }
});

effectsElement.addEventListener('change', effectsChangeHandler);

export {resetSlider};
