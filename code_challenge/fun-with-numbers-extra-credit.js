function numberParserEC(arrayOfNums, numOfPiles) {

  let loToHiArray = sortLoToHi(arrayOfNums);

  //Decrementing while loop is faster than traditional for loop in JS

  let arrangedArrays = [];
  let i = numOfPiles;
  while (i--) {
    arrangedArrays.push([]);
  }

  // go throught the arrangedArrays and pop off the highest value for each number until the loToHiArray is empty

  while (loToHiArray.length > 0) {
    arrangedArrays.forEach((array) => {
      if (loToHiArray.length) {
        array.push(loToHiArray.pop())
      }
    })
  }

  let magnitudeArray = truthArrayValues(arrangedArrays);

  let oneDimensionArray = makeArray1D(magnitudeArray);

  let total = sumArray(oneDimensionArray)

  return total;
}

//sort the an array from low to high
function sortLoToHi(arrayOfNums) {
  return arrayOfNums.sort((a, b) => {
    return a-b
  });
}

// adds magnitudes to each of the number in the array based on its position
function truthArrayValues(arrangedArrays) {
  return arrangedArrays.map((array) => {
    return array.map((number,i) => {
      let arrayLength = array.length;
      return number * Math.pow(10, arrayLength - (i + 1));
    })
  })
}

//flattens array from 2D to 1D
function makeArray1D(magnitudeArray) {
  return magnitudeArray.map((array) => {
    return array.reduce(function(a, b) {
      return a + b;
    }, 0);
  })
}

// sums all of the values of an array
function sumArray(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }, 0);
}

var testArrayOne = [3, 6, 4, 9, 0, 1]
var testNumberOne = 4

var testArrayTwo = [1, 2, 3, 1, 2, 3, 4]
var testNumberTwo = 3

console.log("Extra Credit One is: ", numberParserEC(testArrayOne,testNumberOne));
console.log("Extra Credit Two is: ", numberParserEC(testArrayTwo,testNumberTwo));
