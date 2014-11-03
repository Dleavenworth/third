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
