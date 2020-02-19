import './date-dropdown.scss';
import './plugin/datepicker.js';
import IMask from 'imask';

$('.date-dropdown__input').datepicker({

        altField: '.filter-date-dropdown',
        altFieldDateFormat: 'd M',
        toggleSelected: false,
        prevHtml: '<span class="material-icons">arrow_back</span>',
        nextHtml: '<span class="material-icons">arrow_forward</span>',
        multipleDatesSeparator: ' - ',
        range: true,
        clearButton: true,
        todayButton: true,
        //separation date of first and second dropdowns
        onSelect: (formattedDate) => {
                    if (formattedDate.length > 1) {
                      $('.first-date-dropdown').val(formattedDate.split(' - ')[0]);
                      $('.second-date-dropdown').val(formattedDate.split(' - ')[1]);
                    }
                  },
        language: {today: 'Применить'},
});




document.querySelector('.second-date-dropdown').addEventListener('click', () => {$('.first-date-dropdown').datepicker().data('datepicker').show();});
document.querySelector('.filter-date-dropdown').addEventListener('click', () => {$('.first-date-dropdown').datepicker().data('datepicker').show();});
var AllButton = document.querySelectorAll('.date-dropdown__button');
AllButton[0].addEventListener('click', () => {$('.first-date-dropdown').datepicker().data('datepicker').show();});
AllButton[1].addEventListener('click', () => {$('.first-date-dropdown').datepicker().data('datepicker').show();});
document.querySelector('.filter-date-dropdown__button').addEventListener('click', () => {$('.first-date-dropdown').datepicker().data('datepicker').show();});


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
