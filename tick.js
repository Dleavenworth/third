var keys = document.querySelectorAll('div.box');
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', runGame);
}

function runGame() {
  this.innerHTML = 'X'; 
}
