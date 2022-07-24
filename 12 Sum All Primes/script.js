function sumPrimes(num) {

  function isPrimeNumber(num1){
    for(let k=2;k<=Math.sqrt(num1);k++){
      if(num1%k==0){
        return false;
      }
    }
    return true;
  }

  var sum=0;

  for(let i=2;i<=num;i++){
    if(isPrimeNumber(i)){
      sum=sum+i;
    }    
  }
  console.log(sum);
  return sum;
}

sumPrimes(977);

// 2+3+5+7

// sumPrimes(10);