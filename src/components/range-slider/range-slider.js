import noUiSlider from 'nouislider';

var rangeSlider = document.getElementById('range-slider__line');

noUiSlider.create(rangeSlider, {
    start: [5000, 10000],
    connect: true,
    step: 500,
    range: {
        'min': 0,
        'max': 16000
    }
});
var MinVal = document.getElementById('range-slider__value-min');
var MaxVal = document.getElementById('range-slider__value-max');

rangeSlider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        MaxVal.innerHTML = Intl.NumberFormat('ru-RU').format(values[handle])+'Р';
    } else {
        MinVal.innerHTML = Intl.NumberFormat('ru-RU').format(values[handle])+'Р';
    }
});
