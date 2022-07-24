function diffArray(arr1, arr2) {
  const newArr = [];
  var arr1length=arr1.length;
  var arr2length=arr2.length;

  console.log(arr1length);
  console.log(arr2length);

  var sumarray=[];
  sumarray=arr1.concat(arr2);
  var sumarraylength=sumarray.length;
  console.log("arr1 "+ (arr1));
  console.log("arr2  "+(arr2));
  console.log("sumarr"+ (sumarray));

  var result=[];
  var start=0;
  var count=0;

  for(let i=0;i<sumarraylength;i++){
    for(let k=0;k<arr1length;k++){
      if(arr1[k]==sumarray[i]){
        start=1;
      }      
    }
    count++;
    if (count == 1 && start == 0) {
        result.push(sumarray[i]);
    }
    start = 0;
    count = 0;
  }

  for(let i=0;i<sumarraylength;i++){
    for(let k=0;k<arr2length;k++){
      if(arr2[k]==sumarray[i]){
        start=1;
      }      
    }
    count++;
    if (count == 1 && start == 0) {
        result.push(sumarray[i]);
    }
    start = 0;
    count = 0;
  }

  console.log(result);

  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])