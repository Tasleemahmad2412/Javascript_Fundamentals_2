//Arrays
// const friends = ["Nummad", "Fawad", "Farhan"];
// let i;
// for (i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// //anotehr way of displaying arrays
// const years = new Array(2000, 2001, 2002, 2003);
// console.log(years[years.length - 1]);

// //add elements
// friends.push("Tasleem");
// friends.unshift("Shazal");

// //remove elements
// friends.pop(); // LAst element deleted
// friends.shift(); //First element deleted
// friends.shift();
// for (i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// console.log(friends.indexOf("Farhan"));
// console.log(friends.includes("Farhan"));

//=======================================================
//Objects in Javascript
//=======================================================
//arrays use square brackets and objects use curly braces
const array = ["taslem", 2023 - 2003, "programmer", ["fawad", "nummad"]];
console.log(array);

//Objects is another data structure in which we save key value pairs
//declaring Object
//in this case obj data has 5 properties
//there are many ways to create objs in javascript but this one is the easist
// and also objects are the most fundamental part of javascript
//in arrays the order to specify the elements is important but its not the case in objects
const data = {
  firstName: "Tasleem",
  lastName: "Naeem",
  age: 2023 - 2003,
  job: "Programmer",
  friends: ["Farhan", "Shazal"],
};

const anime = {
  Action: ["Naruto", "Dragon ball", "One piece"],
  Romance: ["Your name", "A silent voice", "Weathering with you"],
  Comedy: ["Grand blue", "Gintama", "Konosuba"],
  Mystery: ["Death note", "Erased", "Monster"],
};

console.log(anime.Action[0]);
console.log(anime.Romance[1]);
console.log(anime.Comedy[2]);
console.log(anime.Mystery[2]);
console.log(data);
//=======================================================
//=======================================================
// Dot vs Bracket Notation (How to retrieve and change data in an objects )
console.log(data["friends"]);
console.log(
  `My name is ${data.firstName} ${data.lastName} and i am a ${data.job}`
);

const nameKey = "Name";
console.log(data["first" + nameKey]);

const interestedIn = prompt("What u wanna know about me?");
console.log(interestedIn);
//console.log(data.interestedIn); //this will not work because it will look for the property named interestedIn (undefined)
//console.log(data[interestedIn]); //this will work because it will look for the property named interestedIn
if (data[interestedIn]) {
  console.log(data[interestedIn]);
} else {
  console.log("Wrong request!");
}

//how to add new properties to an object
data.location = "Pakistan";
data["instagram"] = "@tasleeeeeem";

console.log(data);
// Challenge
console.log(
  `${data.firstName} has ${data.friends.length} friends, and hie best friend is ${data.friends[0]}`
);
