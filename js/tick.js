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
  alert("WWE SUPPPPPPEEEERRRR SMMMMAAAAACCCCCKKKKKK DDDDDDOOOOWWWWNNN");
 } 
}
