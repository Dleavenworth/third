var keys = document.querySelectorAll('a.button');
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', mathify);
}

var output = document.getElementById('display');
var input = [];

function mathify() {
  //First number
  if (input === undefined) {
    input[0] = this.innerHTML;
  }
  //Second number
  if (input.length === 1 && this.classList.contains === 'opp') {
    input[1] = this.innerHTML;
  }
  else if (this.innerHTML === '=' && input.length === 3) {
    switch(input[1]) {
      case '+':
        return input[0] + input[2];
        //break;
      case '-':
        return input[0] - input[2];
        //break;
      case '*': 
        return input[0] * input[2];
        //break;
      case '/': 
        return input[0] / input[2];
        //break;
      default:
        return "Error";
    }
  }
}
