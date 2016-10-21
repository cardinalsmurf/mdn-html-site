var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

var myImg = document.querySelector('img');
myImg.onclick = function() {
  var mySrc = myImg.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImg.setAttribute('src', 'images/lena256x256.something');
  } else {
    myImg.setAttribute('src', 'images/firefox-icon.png');
  }
}
