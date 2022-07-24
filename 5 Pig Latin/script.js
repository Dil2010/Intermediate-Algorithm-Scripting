function translatePigLatin(str) {
  var word=str;
  var wordlenth=word.length;
  var firstletter=word[0];
  var wordwithout=word.slice(1,wordlenth);
  var ay="ay";
  var newlastword=firstletter.concat(ay);
  var finalword;

  var k=['a', 'e', 'i', 'o', 'u'].indexOf(firstletter);
  var score=false;
  if(k>=0){
    score=true;
  }else{
    score=false;
  }

  if(score){
    finalword=word.concat('way');
  }else{
    finalword=wordwithout.concat(newlastword);
  }
  console.log(word);
  console.log(wordlenth);
  console.log(wordwithout);
  console.log(firstletter);
  console.log(newlastword);
  console.log(finalword); 

  return str;
}

// translatePigLatin("consonant");
translatePigLatin("realifornia");