/*
function show_cal() {
  function num() {
    a=Number(document.form1.num1.value);
    b=Number(document.form1.num2.value);
    c=a+b;
    document.form1.num1.value=c;

    a=Number(document.form1.num1.value);
    b=Number(document.form1.num2.value);
    c=a-b;
    document.form1.num1.value=c;

    a=Number(document.form1.num1.value);
    b=Number(document.form1.num2.value);
    c=a*b;
    document.form1.num1.value=c;

    a=Number(document.form1.num1.value);
    b=Number(document.form1.num2.value);
    c=a/b;
    document.form1.num1.value=c;
  }

  function addition() {
    a=Number(document.form1.num3.value);
    b=Number(document.form1.num4.value);
    c=a+b;
    document.form1.result1.value=c;
  }

  function subtraction() {
    a=Number(document.form1.num5.value);
    b=Number(document.form1.num6.value);
    c=a-b;
    document.form1.result2.value=c;
  }

  function multiply() {
    a=Number(document.form1.num7.value);
    b=Number(document.form1.num8.value);
    c=a*b;
    document.form1.result3.value=c;
  }

  function division() {
    a=Number(document.form1.num9.value);
    b=Number(document.form1.num9.value);
    c=a/b;
    document.form1.result4.value=c;
  }
  num();
} */


var num = function(type, number) {
  return Number($('.'+type+'.'+number).val());
};

var add = function(a, b) {
  return a + b;
};

var sub = function(a, b) {
  return a - b;
};

var multi = function(a, b) {
  return  a * b;
};

var div = function(a, b) {
  return a / b;
};

var fadd = function() {
  return add(num('add', 'first'), num('add', 'second'));
};

var fsub = function() {
  return sub(num('sub', 'first'), num('sub', 'second'));
};

var fmulti = function() {
  return multi(num('multi', 'first'), num('multi', 'second'));
};

var fdiv = function() {
  return div(num('div', 'first'), num('div', 'second'));
};

var results = function() {
  $('.add.result').text(fadd());
  $('.sub.result').text(fsub());
  $('.multi.result').text(fmulti());
  $('.div.result').text(fdiv());
};