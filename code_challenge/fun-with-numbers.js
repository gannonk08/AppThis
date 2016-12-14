function numberParser(arrayOfNums) {

  let hiToLoArray = sortHiToLo(arrayOfNums);

  let leftArray = splitLeft(hiToLoArray);

  let rightArray = splitRight(hiToLoArray);

  let leftMagnitude = truthArrayValues(leftArray);

  let rightMagnitude = truthArrayValues(rightArray);

  let leftSum = sumArray(leftMagnitude)

  let rightSum = sumArray(rightMagnitude)

  let total = leftSum + rightSum;

  return total

}

//sort the an array from high to low
function sortHiToLo(arrayOfNums) {
  return arrayOfNums.sort((a, b) => {
    return b-a
  });
}

// splits the sorted array for every other number
function splitLeft(hiToLoArray) {
  return hiToLoArray.filter((number,i) => {
    if (i % 2 === 0) {
      return true
    }
  })
}

// splits the sorted array for every other number
function splitRight(hiToLoArray) {
  return hiToLoArray.filter((number,i) => {
    if (i % 2 !== 0) {
      return true
    }
  })
}

// adds magnitudes to each of the number in the array based on its position
function truthArrayValues(array) {
  return array.map((number,i) => {
    let arrayLength = array.length;
    return number * Math.pow(10, arrayLength - (i + 1));
  })
}

// sums all of the values of an array
function sumArray(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }, 0);
}

var testArrayOne = [9, 4, 2, 7, 9 ,0]
var testArrayTwo = [1, 2, 1, 2, 1, 2]
var testArrayThree = [9, 1, 8, 2, 7, 3]
var testArrayFour = [5, 1, 2, 6, 8, 0]
var testArrayFive = [0, 0, 0, 0, 0, 0]
var testArraySix = [1, 1, 1, 1, 1, 1]
var testArraySeven = [3, 2, 1, 3, 2, 1, 3, 2, 1]
var testArrayEight = [1]


console.log("Example One is: ", numberParser(testArrayOne));
console.log("Example Two is: ", numberParser(testArrayTwo));
console.log("Example Three is: ", numberParser(testArrayThree));
console.log("Example Four is: ", numberParser(testArrayFour));
console.log("Example Five is: ", numberParser(testArrayFive));
console.log("Example Six is: ", numberParser(testArraySix));
console.log("Example Seven is: ", numberParser(testArraySeven));
console.log("Example Eight is: ", numberParser(testArrayEight));
