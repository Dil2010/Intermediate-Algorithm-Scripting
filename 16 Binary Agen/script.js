function binaryAgent(str) {
  var newstr=str.split(' ');
  var finalstr=[];
  var laststr;
  var newstrlength=newstr.length;
  var test=String.fromCharCode(parseInt(newstr[1], 2))
  var test1=parseInt(newstr[1], 2);

  console.log(newstr);
  console.log(test);
  console.log(test1);

  for(let i=0;i<newstrlength;i++){
    test1=parseInt(newstr[i], 2);
    test=String.fromCharCode(test1);
    finalstr.push(test);
  }

  console.log(finalstr);
  laststr=finalstr.join("");
  console.log(laststr);

  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


