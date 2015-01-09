var keys = document.querySelectorAll('a.button');
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', mathify);
}
var output = document.getElementById('display');
var input = [];

function mathify() {
  console.log(input);
  var ans = undefined;
  /// User hits = Sign ///
  if (this.innerHTML === '=' && input.length === 3) {
    console.log("equalspushed");
    switch (input[1]) {
      case '+':
        ans = input[0] + input[2];
      case '-':
        ans = input[0] - input[2];
      case '*':
        ans = input[0] * input[2];
      case '/':
        ans = input[0] / input[2];
      default:
        ans = NaN;
    }
    output.innerHTML = ans;

  } else if (this.innerHTML === 'clear') {
    console.log("clearpushed");
    output.innerHTML = '';
    input = [];
  }
  // Op //WORK ON THIS//
  else if(input.length === 2) {
    console.log("Operator");
    input.push(this.innerHTML);
  }


  //Second number
  else if (input.length === 1 && this.classList.contains === 'opp') {
    console.log("op pushed");
    input[1] = this.innerHTML;
  }
  //First number
  else if (input.length < 2) {
    console.log("first number added/inputed");
    if (input.length === 0) {
      input.push(parseInt(this.innerHTML));
    }
    else{
      input[0] = input[0] * 10 + parseInt(this.innerHTML)
    }
    output.innerHTML = input[0];
  }
  // this shouldn't ever run//
  else {
    //   output.insertAdjacentHTML('beforeend', this.innerHTML);
    console.log("last else");
    output.innerHTML += this.innerHTML
  }
  console.log(input)
}
console.clear();
