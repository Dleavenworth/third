var arr = ["string", 2, 3];
function findMe(arr, str) {
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      console.log("True");
      return i;
    }
  }
  return false;
}

