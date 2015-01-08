function evenSum(num) {
  nums = [];
  for(var i = 0; i <= num; i++) {
    if(i % 2 === 0) {
      nums.push(i);
    }
  }
  return eval(nums.join('+'));
}
evenSum(20);
