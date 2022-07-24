function steamrollArray(arr) {

  // const fruits = arr[0];
  // console.log(arr[0]);
  // console.log(arr[1]);
  // console.log(arr[2]);
  // console.log(arr[3]);
  // let result =  Array.isArray(fruits);

  // console.log(Array.isArray(arr[2 ]));  
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      console.log("if  ", arr[i]);
      flattenedArray.push(...steamrollArray(arr[i]));

    } else {
      // Copy contents that are not arrays
      console.log("else  ", arr[i]);
      flattenedArray.push(arr[i]);

    }
  }
  console.log(flattenedArray);
  return flattenedArray;
};

// test here
steamrollArray([1, [2], [3, [[4]]]]);

// const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = [ ...numbers1, 1, 2, 6,7,8]; 
// console.log(numbers1);
// console.log(numbers2);

// const adrian = {
//   fullName: 'Adrian Oprea',
//   occupation: 'Software developer',
//   age: 31,
//   website: 'https://oprea.rocks'
// };

// const bill = {
//   ...adrian,
//   // fullName: 'Bill Gates',
//   age:23,
//   website: 'https://microsoft.com'
// };

// console.log(adrian);
// console.log(bill);
