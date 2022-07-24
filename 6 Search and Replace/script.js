function myReplace(str, before, after) {
  var str1=str.split(" ");
  console.log(str);
  console.log(before);
  console.log(after);
  console.log(str1[3]);
  var strlength=str.length;
  var r=str1.indexOf(before);
  console.log(r);
  str1[r]=after;
  console.log(str1);
  var str2=str1.join(" ");
  console.log(str2);



  return str;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("I think we should look up there", "up", "Down")