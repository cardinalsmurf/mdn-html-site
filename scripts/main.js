var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

var myImg = document.querySelector('img');
myImg.onclick = function() {
  var mySrc = myImg.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImg.setAttribute('src', 'images/lenna256x256.gif');
  } else {
    myImg.setAttribute('src', 'images/firefox-icon.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}
