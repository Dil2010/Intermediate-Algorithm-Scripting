function convertHTML(str) {
  var newstr=str.split("");
  var newstrlength=newstr.length;
  console.log(newstrlength);
  console.log(newstr);
  console.log(newstr[1]);
  var finalarr=[];
  // finalarr.push('&lt')
  for(let i=0;i<newstrlength;i++){
    if(newstr[i]==='<'){        
      newstr[i]='&lt';   
      finalarr.push(newstr[i]);
    }else if(newstr[i]==='>'){
      newstr[i]='&gt';   
      finalarr.push(newstr[i]);

    }else if(newstr[i]==='&'){
      newstr[i]='&amp';   
      finalarr.push(newstr[i]);

    }else if(newstr[i]==='"'){
      newstr[i]='&quot';   
      finalarr.push(newstr[i]);

    }
    else {
      finalarr.push(newstr[i]);
    }
  }

  var lastarr=finalarr.join('');
  console.log(lastarr);


  return str;
}

convertHTML("Dolce & Gabbana");

// convertHTML('<Stuff in "quotation marks"');