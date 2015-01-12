var keys = document.querySelectorAll('a.button');
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', mathify);
}
var output = document.getElementById('display');
var input = [];

function mathify() {

  console.log(this.classList.contains('opp'));   
  console.log("length " + input.length);
  console.log(this.dataset.value);
  console.log(input);
  var ans = undefined;
  /// User hits = Sign ///
  if (this.dataset.value === '=' && input.length === 3) {
    console.log("equals pushed");
    switch (input[1]) {
      case '+':
        ans = input[0] + input[2];
        break;
      case '-':
        ans = input[0] - input[2];
        break;
      case '*':
        ans = input[0] * input[2];
        break;
      case '/':
        ans = input[0] / input[2];
        break;
      case '^':
        ans = Math.pow(input[0], input[2]);
        break;
      case '%':
        ans = input[0] % input[2];
        break;
      default:
        console.log("Reached default");
        ans = NaN;
    }
    output.innerHTML = ans;

  } else if (this.dataset.value === 'c') {
    console.log("clearpushed");
    output.innerHTML = '';
    input = [];
  }
  // Op 
  else if(input.length === 1 && this.classList.contains('opp')) {
    console.log("Operator");
    input.push((this.dataset.value));
    console.log(input);
  }

  //Second number
  else if (input.length >= 2) {
    console.log("second number added/inputed");
    if (input.length === 2) {
      input.push(parseInt(this.innerHTML));
    }
    else{
      input[2] = input[2] * 10 + parseInt(this.innerHTML);
    }
    output.innerHTML = input[2];



  }
  //First number
  else if (input.length < 2) {
    console.log("first number added/inputed");
    if (input.length === 0) {
      input.push(parseInt(this.innerHTML));
    }
    else{
      input[0] = input[0] * 10 + parseInt(this.innerHTML);
    }
    output.innerHTML = input[0];
  }
  // this shouldn't ever run//
  else {
    //   output.insertAdjacentHTML('beforeend', this.innerHTML);
    console.log("last else");
    output.innerHTML += this.innerHTML;
  }
  console.log(input);
}
console.clear();
