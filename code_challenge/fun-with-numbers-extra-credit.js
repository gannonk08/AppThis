function numberParserEC(arrayOfNums, numOfPiles) {

  const hiToLoArray = arrayOfNums.sort((a, b) => {
    return b-a
  });

  const numArrayLength = arrayOfNums.length
  if (numArrayLength / numOfPiles < 1) {
    return "number larger than digits"
  }
  else {
    var largestPileSize = 1;
    let pileIndex = 1;
    while ((numArrayLength-largestPileSize)/numOfPiles > 1) {
      pileIndex++
      largestPileSize = pileIndex;

    }
    return largestPileSize


  }



}
var testArrayOne = [3, 6, 4, 9, 0, 1]
var testNumberOne = 4
var testArrayTwo = [1, 2, 3, 1, 2, 3, 4, 3, 4, 3, 4]
var testNumberTwo = 4


console.log("Extra Credit One is: ", numberParserEC(testArrayOne,testNumberOne));
console.log("Extra Credit Two is: ", numberParserEC(testArrayTwo,testNumberTwo));
