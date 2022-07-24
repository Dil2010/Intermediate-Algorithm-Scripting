function dropElements(arr, func) {

  var newarr=arr;
  console.log(newarr);
  var result=[];

  var arrlength=arr.length;

  for(let i=0;i<arrlength;i++){
    if(func(newarr[i])){
      result.push(arr[i]);
    }else{
      
    }
  }

  console.log(result);


  return arr;
}

// dropElements([1, 2, 3], function(n) {return n < 3; });

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})

// dropElements([1, 2, 3], function(n) {return n > 0;})

// function dropElements(arr, func) {
//   // drop them elements.
//   let originalLen = arr.length;
//   for (let i = 0; i < originalLen; i++) {
//     if (func(arr[0])) {
//       break;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }

// // test here
// dropElements([1, 2, 3, 4], function(n) {
//   return n >= 3;
// });