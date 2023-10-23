import {uploadImageElement} from './elements.js';

const effectElement = document.querySelector('.img-upload__effect-level');
const sliderElement = effectElement.querySelector('.effect-level__slider');
const sliderFieldElement = effectElement.querySelector('.effect-level__value');
const effectsElement = document.querySelector('.effects__list');

const Effect = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilterName = {
  [Effect.NONE]: 'none',
  [Effect.CHROME]: 'grayscale',
  [Effect.SEPIA]: 'sepia',
  [Effect.MARVIN]: 'invert',
  [Effect.PHOBOS]: 'blur',
  [Effect.HEAT]: 'brightness',
};

const EFFECT_CONFIG = {
  [Effect.NONE]: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  [Effect.CHROME]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  [Effect.SEPIA]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  [Effect.MARVIN]: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  [Effect.PHOBOS]: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
  [Effect.HEAT]: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
};

noUiSlider.create(sliderElement, {...EFFECT_CONFIG.none, connect: 'lower'});

const showSlider = () => {
  effectElement.classList.remove('hidden');
};

const hideSlider = () => {
  effectElement.classList.add('hidden');
  uploadImageElement.removeAttribute('class');
  uploadImageElement.style.filter = 'none';
};

function effectChangeHandler (evt) {
  if (evt.target.matches('.effects__radio')) {
    const value = evt.target.value;
    uploadImageElement.removeAttribute('class');
    uploadImageElement.classList.add(`effects__preview--${value}`);
    uploadImageElement.dataset.type = value;
    sliderElement.noUiSlider.updateOptions(EFFECT_CONFIG[value]);
  }
}

const resetSlider = () => {
  uploadImageElement.dataset.type = Effect.NONE;
  sliderElement.noUiSlider.updateOptions(EFFECT_CONFIG.none);
};

const getFilterUnit = (filterType) => {
  if (filterType === Effect.PHOBOS) {
    return 'px';
  } else if (filterType === Effect.MARVIN) {
    return '%';
  } else {
    return '';
  }
};

sliderElement.noUiSlider.on('update', () => {
  const value = parseFloat(sliderElement.noUiSlider.get());
  const type = uploadImageElement.dataset.type;

  if (type === Effect.NONE) {
    return hideSlider();
  }

  showSlider();
  uploadImageElement.style.filter = `${effectToFilterName[type]}(${value}${getFilterUnit(type)})`;
  sliderFieldElement.value = value;
});

hideSlider();
effectsElement.addEventListener('change', effectChangeHandler);

export {resetSlider};
