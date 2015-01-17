//Adds event listener to all divs
var keys = document.querySelectorAll('div.box');
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', runGame);
}
var turns = 1;
//Runs the game and places X's and O's on divs
function runGame(evt) {
  if(turns % 2 === 0) {
    turns++;
    this.innerHTML = 'X';
  }
  else {
    turns++;
    this.innerHTML = 'O';
  }
  winCheck(evt.target);
/*  if (turns === 19) {
    alert("Cat's game");
  }*/
}
//Function checks for win 
function winCheck(targt) {
  var sq1 = document.getElementById('box0');
  var sq2 = document.getElementById('box1');
  var sq3 = document.getElementById('box2');
  var sq4 = document.getElementById('box3');
  var sq5 = document.getElementById('box4');
  var sq6 = document.getElementById('box5');
  var sq7 = document.getElementById('box6');
  var sq8 = document.getElementById('box7');
  var sq9 = document.getElementById('box8');

  if (sq1.innerHTML === sq2.innerHTML && sq2.innerHTML === sq3.innerHTML && sq1.innerHTML.length === 1 ) {
    for(var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }  
  }
  else if (sq4.innerHTML === sq5.innerHTML && sq5.innerHTML === sq6.innerHTML && sq4.innerHTML.length === 1 ) {
    for(var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }
  }
  else if (sq7.innerHTML === sq8.innerHTML && sq8.innerHTML === sq9.innerHTML && sq7.innerHTML.length === 1) {
    for(var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }
  }
  else if (sq1.innerHTML === sq5.innerHTML && sq5.innerHTML === sq9.innerHTML && sq1.innerHTML.length === 1) {
    for( var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }
  }
  else if (sq3.innerHTML === sq5.innerHTML && sq5.innerHTML === sq7.innerHTML && sq3.innerHTML.length === 1) {
    for(var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }
  }
  else if(sq1.innerHTML === sq4.innerHTML && sq4.innerHTML === sq7.innerHTML && sq1.innerHTML.length === 1) {
    for(var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }
  }
  else if(sq2.innerHTML === sq5.innerHTML && sq5.innerHTML === sq8.innerHTML && sq2.innerHTML.length === 1) {
    for(var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }
  }
  else if(sq3.innerHTML === sq6.innerHTML && sq6.innerHTML === sq9.innerHTML && sq3.innerHTML.length === 1) {
    for(var i = 0; i < 9; i++) {
      document.getElementById('box' + i).innerHTML = targt.innerHTML;
    }
  }
}
