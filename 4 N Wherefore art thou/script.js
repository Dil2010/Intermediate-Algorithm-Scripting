// function whatIsInAName(collection, source) {
//   const arr = [];
//   // Only change code below this line

//   console.log(source);
//   console.log(collection);

//   // Only change code above this line
//   return arr;
// }

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var souceKeys = Object.keys(source);
  let kqw="last";
  var t=souceKeys.toString();
  console.log(t);
  console.log(souceKeys.length);
  console.log(collection.length);

  var collectionKeys = Object.keys(collection);

  console.log(collection[0].last);
  console.log(collectionKeys);
  
 



  // for(let i=0;i<collection.length;i++){
  //   if(collection[i].sour)
  // }

  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (!obj.hasOwnProperty(souceKeys[i]) ||
          obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);


