function destroyer(arr) {
  var arr1 = arr.slice(1, 3);
  var arr2 = arr;
  var arr2length = arr2.length;
  console.log(arr1);
  console.log(arr2);
  console.log(arr2length);

  var count = 0;
  var start = false;
  var result = [];

  for (j = 0; j < arr2.length; j++) {
    for (k = 0; k < arr1.length; k++) {
      if (arr2[j] == arr1[k]) {
        start = true;
      }
    }
    count++;
    if (count == 1 && start == false) {
      result.push(arr2[j]);
    }
    start = false;
    count = 0;
  }
  console.log(result);
  return arr;
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// destroyer([3, 5, 1, 2, 2], 2, 3, 5);

destroyer([2, 3, 2, 3], 2, 3)
