function fearNotLetter(str) {
  if (str == "abcdefghijklmnopqrstuvwxyz") {
    console.log(undefined);
  } else {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    var newstr = str.split('');
    console.log(alphabet);
    console.log(newstr);
    var alphabetlength = alphabet.length;
    var strlength=str.length;
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
    console.log(fruits.splice(2,3));
    var index=alphabet.indexOf(newstr[0]);
    var mark=alphabet.splice(index,strlength);
    console.log(mark);
    console.log(index);
    console.log(newstr[2]);

    var missing;
    for (i = 0; i < mark.length; i++) {
      if (!newstr.includes(mark[i])) {
        missing = mark[i];
      }
    }

    console.log(missing);
  }
  return str;
}


// fearNotLetter("abcdefghj");

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
