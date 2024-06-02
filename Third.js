//functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

const fruitProcessor = (apples, oranges) => {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces} apples Pieces and ${orangePieces} orange Pieces.`;
  return juice;
};

console.log(fruitProcessor(2, 3));
//=================================================
//CODING CHALLENGE 1 for this module fundamentals 2

const calcAverage = (a, b, c) => {
  const average = (a + b + c) / 3;
  return average;
};

const checkWinner = (avgDolphins, avgkoalas) => {
  if (avgDolphins >= 2 * avgkoalas) {
    return `Dolphins win 🏆 with average of ${avgDolphins}`;
  } else if (avgkoalas >= 2 * avgDolphins) {
    return `Koalas win 🏆 with avg of ${avgkoalas}`;
  } else {
    return "No one Wins...";
  }
};

const avgDolphins = calcAverage(44, 23, 71);
console.log("Average of Dolphins " + avgDolphins);
const avgkoalas = calcAverage(65, 54, 49);
console.log("Average of Koalas " + avgkoalas);

//checking winner
console.log(checkWinner(avgDolphins, avgkoalas));
