function numberParser(arrayOfNums) {

  let hiToLoArray = arrayOfNums.sort((a, b) => {
    return b-a
  });

  let leftArray = [];
  let rightArray = [];

  for (var i = 0; i < hiToLoArray.length; i++) {
    if (i % 2 === 0) {
      leftArray.push(hiToLoArray[i])
    }
    else {
      rightArray.push(hiToLoArray[i])
    }
  }

  let leftTrue = leftArray.map((number,i) => {
    let arrayLength = leftArray.length;
    return number * Math.pow(10, arrayLength - (i + 1));
  })

  let rightTrue = rightArray.map((number,i) => {
    let arrayLength = rightArray.length;
    return number * Math.pow(10, arrayLength - (i + 1));
  })

  let leftSum = leftTrue.reduce(function(a, b) {
    return a + b;
  }, 0);

    let rightSum = rightTrue.reduce(function(a, b) {
      return a + b;
    }, 0);

  let total = leftSum + rightSum;

  return total

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
