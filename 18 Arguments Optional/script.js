function addTogether() {
  const [first, second] = arguments;
  console.log(arguments);

  if (typeof(first) !== "number"){
    console.log(undefined);
  }
  else if (second === undefined){
    return (second) => addTogether(first, second);
  }
  else if (typeof(second) !== "number"){
  console.log(undefined);
  }
  else{
  console.log(first+second);
  return first + second;
  }
}

// addTogether(5)(7);
addTogether(2,3);
// addTogether(2)([3]);

// function addTogether() {
//   const [first, second] = arguments;
//   if (typeof(first) !== "number")
//     return undefined;
//   if (second === undefined)
//     return (second) => addTogether(first, second);
//   if (typeof(second) !== "number")
//     return undefined;
//   return first + second;
// }