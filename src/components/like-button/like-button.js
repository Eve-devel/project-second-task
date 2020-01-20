var firstLikesVals = [];
for (var i=0; document.querySelectorAll('.like-button__border').length > i; i++) {
  document.querySelectorAll('.like-button__border')[i].addEventListener('click', addOnClass);

  firstLikesVals[i] = document.querySelectorAll('.like-button__val')[i].textContent;
  document.querySelectorAll('.like-button__border')[i].addEventListener('click', changeVal);
}

function addOnClass() {
  this.classList.toggle('like-button_on');
  this.querySelector('.like-button__icon').innerHTML = 'favorite';
}

function changeVal() {
  console.log(firstLikesVals)
  for (var j=0; firstLikesVals.length > j; j++){
    if ((firstLikesVals[j] == this.querySelector('.like-button__val').textContent) ||
        ((firstLikesVals[j] - 1) == this.querySelector('.like-button__val').textContent)) {
      firstLikesVal = firstLikesVals[j];
    }
  }
console.log(firstLikesVal)
  if (this.querySelector('.like-button__val').textContent > firstLikesVal) {
    var decrVal = this.querySelector('.like-button__val').textContent;
    decrVal--;
    this.querySelector('.like-button__val').innerHTML = decrVal;
    this.querySelector('.like-button__icon').innerHTML = 'favorite_border';
  } else {
    var incrVal = this.querySelector('.like-button__val').textContent;
    incrVal++;
    this.querySelector('.like-button__val').innerHTML = incrVal;
    return incrVal;
  }
}
