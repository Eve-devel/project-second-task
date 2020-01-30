var element = document.querySelector('.birthday');
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
var mask = IMask(element, maskOptions);
