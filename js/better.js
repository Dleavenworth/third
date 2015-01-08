var one = document.getElementById("one");
one.addEventListener("click", mathify);

var two = document.getElementById("two");
two.addEventListener("click", mathify);

var three = document.getElementById("three");
three.addEventListener("click", mathify);

var four = document.getElementById("four");
four.addEventListener("click", mathify);

var five = document.getElementById("five");
five.addEventListener("click", mathify);

var six = document.getElementById("six");
six.addEventListener("click", mathify);

var seven = document.getElementById("seven");
seven.addEventListener("click", mathify);

var eight = document.getElementById("eight");
eight.addEventListener("click", mathify);

var nine = document.getElementById("nine");
nine.addEventListener("click", mathify);

var add = document.getElementById("add");
add.addEventListener("click", mathify);

var subtract = document.getElementById("subtract");
subtract.addEventListener("click", mathify);

var clear = document.getElementById("clear");
clear.addEventListener("click", mathify);

var multiply = document.getElementById("multiply");
multiply.addEventListener("click", mathify);

var zero = document.getElementById("zero");
zero.addEventListener("click", mathify);

var dot = document.getElementById("dot");
dot.addEventListener("dot", mathify);

var equals = document.getElementById("equals");
equals.addEventListener("equals", mathify);

var divide = document.getElementById("divide");
divide.addEventListener("divide", mathify);

var output = document.getElementById("display");

function mathify(){
  if(this.classList.contains("opp")){
    output.insertAdjacentHTML('beforeend', this.innerHTML);
  }
  else if(this.innerHTML === "="){

  }
  else if(this.innerHTML === "Clear"){

  }
  else{
    output.insertAdjacentHTML('beforeend', this.innerHTML);
    var btnVal = output.innerHTML;

  }
  }
