const scaleElement = document.querySelector('.img-upload__scale');
const scaleSmallerButtonElement = scaleElement.querySelector('.scale__control--smaller');
const scaleBiggerButtonElement = scaleElement.querySelector('.scale__control--bigger');
const scaleFieldElement = scaleElement.querySelector('.scale__control--value');
const uploadImageElement = document.querySelector('.img-upload__preview img');

const Scale = {
  STEP: 25,
  MIM: 25,
  MAX: 100,
  DEFAULT: 100
};

let scaleValue = parseInt(scaleFieldElement.value, 10);

const changeValue = () => {
  scaleFieldElement.value = `${scaleValue}%`;
  uploadImageElement.style.transform = `scale(${scaleValue / 100})`;
  scaleBiggerButtonElement.disabled = false;
  scaleSmallerButtonElement.disabled = false;
};

function scaleSmallButtonClickHandler () {
  if (scaleValue > Scale.MIM) {
    scaleValue -= Scale.STEP;
    changeValue();
  } else {
    scaleSmallerButtonElement.disabled = true;
  }
}

function scaleBiggerButtonClickHandler () {
  if (scaleValue < Scale.MAX) {
    scaleValue += Scale.STEP;
    changeValue();
  } else {
    scaleBiggerButtonElement.disabled = true;
  }
}

const resetScale = () => {
  scaleFieldElement.value = `${Scale.DEFAULT}%`;
  uploadImageElement.style.transform = `scale(${Scale.DEFAULT / 100})`;
};

scaleSmallerButtonElement.addEventListener('click', scaleSmallButtonClickHandler);
scaleBiggerButtonElement.addEventListener('click', scaleBiggerButtonClickHandler);

export {resetScale};
