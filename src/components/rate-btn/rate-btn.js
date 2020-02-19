import './rate-btn.scss';

var allRateBtn = [];
var allStars = [];

for (var i=0; i<document.querySelectorAll('.rate-btn').length; i++) {
  allRateBtn[i]= document.querySelectorAll('.rate-btn')[i];
  allRateBtn[i].addEventListener('mouseover', onRateBtn)
}

function onRateBtn() {
  for (var j=0; j<this.querySelectorAll('.rate-btn__star').length; j++) {
    allStars[j]= this.querySelectorAll('.rate-btn__star')[j];
    allStars[j].addEventListener('click', toggleStar);
  }
}

function toggleStar() {
  if (this.textContent == 'star_border'){
    this.innerHTML = 'star';
    for (var a=allStars.indexOf(this)+1; a<=4; a++) {
      allStars[a].innerHTML = 'star';
    }
  } else {
    for (var b=0; allStars[b]!=this; b++) {
      allStars[b].innerHTML = 'star_border';
    }
  }
}
