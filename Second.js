// function logger() {
//   console.log("My name is tasleem");
// }
// //calling / running / invoking
// logger();
// logger();
// logger();

// //================================================
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(5, 0));

//function declaration
function calcAge1(birthYear) {
  const age = 2023 - birthYear;
  return age;
}

console.log(calcAge1(2003));
//another way to declare the function
//also called an anonymous function
//function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

console.log(calcAge2(2003));

//Third type of function was added to javascript in ES6 is an arrow function
//it is shorter and faster to write
const calcAge3 = (birthYear) => 2023 - birthYear;
console.log(calcAge3(2003));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  if (age > 65) {
    return `${firstName} is already retired and is ${age} years old`;
  } else {
    return `${firstName} retires in ${retirement} years`;
  }
};
console.log(yearsUntilRetirement(2003, "Tasleem"));
console.log(yearsUntilRetirement(2002, "Obaid"));
console.log(yearsUntilRetirement(2003, "Hammad"));
console.log(yearsUntilRetirement(1900, "Dada ji"));
