import {uploadImageElement} from './elements.js';

const scaleElement = document.querySelector('.img-upload__scale');
const smallerButtonElement = scaleElement.querySelector('.scale__control--smaller');
const biggerButtonElement = scaleElement.querySelector('.scale__control--bigger');
const fieldElement = scaleElement.querySelector('.scale__control--value');

const Scale = {
  STEP: 25,
  MIM: 25,
  MAX: 100,
  DEFAULT: 100
};

let scaleValue = parseInt(fieldElement.value, 10);

const setScale = (value) => {
  fieldElement.value = `${value}%`;
  uploadImageElement.style.transform = `scale(${value / 100})`;
};

function smallButtonClickHandler () {
  if (scaleValue > Scale.MIM) {
    scaleValue -= Scale.STEP;
    setScale(scaleValue);
  }
}

function biggerButtonClickHandler () {
  if (scaleValue < Scale.MAX) {
    scaleValue += Scale.STEP;
    setScale(scaleValue);
  }
}

const resetScale = () => {
  setScale(Scale.DEFAULT);
};

smallerButtonElement.addEventListener('click', smallButtonClickHandler);
biggerButtonElement.addEventListener('click', biggerButtonClickHandler);

export {resetScale};
