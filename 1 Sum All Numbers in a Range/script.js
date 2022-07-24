function sumAll(arr) {
  var num1=arr[0];
  var num2=arr[1];
  // num1=sumAll.shift();
  console.log(num1);
  console.log(num2);
  if(num1>num2){
    var maxnum=num1;
    var minnum=num2;
  }else{
    var maxnum=num2;
    var minnum=num1;
  }

  console.log(maxnum);
  console.log(minnum);

  var sum=0;

  for(i=minnum;i<=maxnum;i++){
    sum=sum+i;
  }

  console.log(sum);
  return 1;
}

// sumAll([1, 4]);

sumAll([10, 5])