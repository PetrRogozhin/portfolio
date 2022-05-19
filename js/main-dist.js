$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		slidesToShow:3,
		centerMode:true,
		touchThreshold: 100,
		variableWidth:true,
	});
});



const checkbox = document.getElementById('l-d-mode');
const designer = document.getElementById('designerid');
const developer = document.getElementById('developerid');
const designerSelector = document.getElementById('selector-d');
const developerSelector = document.getElementById('selector-f');

checkbox.addEventListener( 'click', function () {
  if (checkbox.checked) {
    designer.style.display = "block";
    developer.style.display = "none";
    designerSelector.style.opacity = "1";
    developerSelector.style.opacity = "0";

  } else {
    designer.style.display = "none";
    developer.style.display = "block";
    designerSelector.style.opacity = "0";
    developerSelector.style.opacity = "1";

  }
});




// ------------------------Theme--------------------

let html = document.getElementsByTagName('html');
let radios = document.getElementsByName('themes'); 

for (i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() {
    html[0].classList.remove(html[0].classList.item(0));
    html[0].classList.add(this.id);
  });
}







const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const timestamps = [];

timestamps.unshift(getTimestamp());

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
  return keys[getRandomNumber(0, keys.length-1)]
}

function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  key.classList.add("selected");
  let start = Date.now()
}

function getTimestamp() {
  return Math.floor(Date.now() / 1000)
}

document.addEventListener("keyup", event => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
  
  keyElement.classList.add("hit")
  keyElement.addEventListener('animationend', () => {
    keyElement.classList.remove("hit")
  })
  
  if (keyPressed === highlightedKey.innerHTML) {
    timestamps.unshift(getTimestamp());
    const elapsedTime = timestamps[0] - timestamps[1];
    console.log(`Character per minute ${60/elapsedTime}`)
    highlightedKey.classList.remove("selected");
    targetRandomKey();
  } 
})

targetRandomKey();