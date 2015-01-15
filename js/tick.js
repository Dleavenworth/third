var keys = document.querySelectorAll('div.box');
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', runGame);
}
var turns = 1;
function runGame() {
  if(turns % 2 === 0) {
    turns++;
    this.innerHTML = 'X';
  }
  else {
    turns++;
    this.innerHTML = 'O';
  }
  if (turns === 10) {
    alert("Cat's game");
  }
  winCheck();
}

function winCheck() {
  var sq1 = document.getElementById('box0');
  var sq2 = document.getElementById('box1');
  var sq3 = document.getElementById('box2');
  var sq4 = document.getElementById('box3');
  var sq5 = document.getElementById('box4');
  var sq6 = document.getElementById('box5');
  var sq7 = document.getElementById('box6');
  var sq8 = document.getElementById('box7');
  var sq9 = document.getElementById('box8');

  if (sq1.innerHTML === sq2.innerHTML && sq2.innerHTML === sq3.innerHTML) {
   alert("Someone wins"); 
  }
  else if (sq4.innerHTML === sq5.innerHTML && sq5.innerHTML === sq6.innerHTML) {
    alert("Someone wins");
  }
  else if (sq7.innerHTML === sq8.innerHTML && sq8.innerHTML === sq9.innerHTML) {
    alert("Someone wins");
  }
  else if (sq1.innerHTML === sq5.innerHTML && sq5.innerHTML === sq9.innerHTML) {
    alert("Someone wins");
  }
  else if (sq3.innerHTML === sq5.innerHTML && sq5.innerHTML === sq7.innerHTML) {
    alert("Someone wins");
  }
  else {
    alert("Error");
  }
}
