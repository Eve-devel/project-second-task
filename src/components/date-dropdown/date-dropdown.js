import './date-dropdown.scss';
import './plugin/datepicker.js';
import IMask from 'imask';



var element1 = document.querySelector('.first-date-dropdown');
var element2 = document.querySelector('.second-date-dropdown');
var maskOptions = {
  mask: 'DD.MM.YY00',
  blocks: {
    DD: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31
    },
    YY: {
      mask: IMask.MaskedRange,
      from: 19,
      to: 20
    },

    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    }
  }
};

var mask1 = IMask(element1, maskOptions);
var mask2 = IMask(element2, maskOptions);
