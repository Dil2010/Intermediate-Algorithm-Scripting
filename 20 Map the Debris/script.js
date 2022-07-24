function orbitalPeriod(arr) {
  const GM = 398600.4418;
  var arrlength=arr.length;
  // const newavgALT=arr[0].avgAlt;
  const earthRadius = 6367.4447;
  // const earthRadiuspower=Math.pow((earthRadius+newavgALT),3);
  // const mu=Math.sqrt(earthRadiuspower/GM);
  // const T=2*3.14*mu;
  console.log(arr);
  console.log(T);
  console.log(arrlength);

  var newavgALT=[];
  var earthRadiuspower=[];
  var mu=[];
  var T=[];
  var newobj=[];
  var obj={};


  for(let i=0;i<arrlength;i++){
     newavgALT.push(arr[i].avgAlt);
     earthRadiuspower.push(Math.pow((earthRadius+newavgALT[i]),3));
     mu.push(Math.sqrt(earthRadiuspower[i]/GM));
     T.push(2*3.14*mu[i]);
     console.log(T[i]);
     obj={
      name:arr[i].name,
      orbitalPeriod:T[i]
    };
    console.log(obj);
     newobj.push(obj);
  }  

  console.log(newobj);
  return arr;
}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   const a = 2 * Math.PI;
//   const newArr = [];

//   const getOrbPeriod = function(obj) {
//     const c = Math.pow(earthRadius + obj.avgAlt, 3);
//     const b = Math.sqrt(c / GM);
//     const orbPeriod = Math.round(a * b);
//     // create new object
//     return {name: obj.name, orbitalPeriod: orbPeriod};
//   };

//   for (let elem in arr) {
//     newArr.push(getOrbPeriod(arr[elem]));
//   }
//   console.log(newArr);
//   return newArr;
// }

// // test here
// // orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])