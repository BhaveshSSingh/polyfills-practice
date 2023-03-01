/*
Watching JsCafe to learn these
*/

// Map
Array.prototype.map2 = function (callbackFn) {
  const output = [];
  this.forEach((element, index) => {
    output.push(callbackFn(element, index, this));
  });
  return output;
};

console.log(
  "Map",
  [1, 2, 3, 4, 5, 6].map2((e) => e * 5)
);

// Filter
Array.prototype.myFilter = function (callbackFn) {
  const finalArr = [];
  this.forEach((element, index) => {
    if (callbackFn(element, index, this)) {
      finalArr.push(element);
    }
  });
  return finalArr;
};

console.log(
  "Filter",
  [1, 2, 3, 4, 5, 6].myFilter((e) => e % 2 === 0)
);
