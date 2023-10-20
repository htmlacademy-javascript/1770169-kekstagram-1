import {initPictures} from './picture-modal.js';
import {renderPictures} from './pictures.js';
import {getData} from './api.js';
import {showAlert} from './messages.js';
import {initFilters} from './filters.js';
import './upload-form.js';

getData()
  .then((data) => {
    renderPictures(data);
    initFilters(data);
    initPictures(data);
  })
  .catch((error) => {
    showAlert(error);
  });
