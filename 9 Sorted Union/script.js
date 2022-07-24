function uniteUnique(arr) {
  var arrlength = arr.length;
  console.log(arrlength);

  var fullarr = [];

  for (let i = 0; i < arrlength; i++) {
    fullarr = fullarr.concat(arr[i]);
  }
  function check(item,index){
    return (fullarr.indexOf(item) === index);
  }  
  function removeDuplicates(fullarr) {
    // return fullarr.filter((item, index) => fullarr.indexOf(item) === index);
        return fullarr.filter(check);

  }

  console.log(removeDuplicates(fullarr));

  return arr;
}

uniteUnique([[1, 3, 2], [5, 2, 1, 4], [2, 1]]);

//  uniteUnique([
//   [1, 2, 3],
//   [5, 2, 1],
// ]);
