var firstLikesVals = [];
var likeElements = [];
for (var i=0; document.querySelectorAll('.like-button__border').length > i; i++) {  //Iterate over all like buttons
  firstLikesVals[i] = document.querySelectorAll('.like-button__val')[i].textContent;  //Array including the values of all like buttons
  likeElements[i] = document.querySelectorAll('.like-button__box')[i];  //Array including all the 'like buttons' elements on the page
  document.querySelectorAll('.like-button__border')[i].addEventListener('click', changeVal);
}

function changeVal() {
  /*Determines with what value to compare the current value of the like button*/
  for (var j=0; firstLikesVals.length > j; j++){
    if (likeElements[j] == this.querySelector('.like-button__box')) {
      firstLikesVal = firstLikesVals[j];
    }
  }
  if (this.previousSibling.getAttribute('checked')) {
    if (this.querySelector('.like-button__val').textContent >= firstLikesVal) {
      var decrVal = this.querySelector('.like-button__val').textContent;
      decrVal--;
      this.querySelector('.like-button__val').innerHTML = decrVal;
    } else {
      var incrVal = this.querySelector('.like-button__val').textContent;
      incrVal++;
      this.querySelector('.like-button__val').innerHTML = incrVal;
    }
  } else {
    if (this.querySelector('.like-button__val').textContent > firstLikesVal) {
      var decrVal = this.querySelector('.like-button__val').textContent;
      decrVal--;
      this.querySelector('.like-button__val').innerHTML = decrVal;
    } else {
      var incrVal = this.querySelector('.like-button__val').textContent;
      incrVal++;
      this.querySelector('.like-button__val').innerHTML = incrVal;
    }
  }
}
