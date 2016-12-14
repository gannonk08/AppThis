function numberParserEC(arrayOfNums, numOfPiles) {

  const hiToLoArray = arrayOfNums.sort((a, b) => {
    return a-b
  });
  let arrangedArrays = [];
  for (var i = 0; i < numOfPiles; i++) {
    arrangedArrays.push([]);
  }

  while (hiToLoArray.length > 0) {
    arrangedArrays.forEach((array) => {
      if (hiToLoArray.length) {
        array.push(hiToLoArray.pop())
      }
    })
  }

  let trueArray =
  arrangedArrays.map((array) => {
    return array.map((number,i) => {
      let arrayLength = array.length;
      return number * Math.pow(10, arrayLength - (i + 1));
    })
  })

  let oneDimensionArray = trueArray.map((array) => {
    return array.reduce(function(a, b) {
      return a + b;
    }, 0);
  })

  let total = oneDimensionArray.reduce(function(a, b) {
    return a + b;
  }, 0);

  return total;
}

var testArrayOne = [3, 6, 4, 9, 0, 1]
var testNumberOne = 4

var testArrayTwo = [1, 2, 3, 1, 2, 3, 4]
var testNumberTwo = 3

console.log("Extra Credit One is: ", numberParserEC(testArrayOne,testNumberOne));
console.log("Extra Credit Two is: ", numberParserEC(testArrayTwo,testNumberTwo));
