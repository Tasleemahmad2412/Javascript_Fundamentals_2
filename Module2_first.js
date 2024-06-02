//strict mode is a mode in javascript which allows us to write a more secure code
//we have to write this string at the beginning of the code to enable strict mode
//it has to be very first dtatement in code, if its not first   then it will not work
"use strict";
//we can also activate strict mode for specific functions, or a specific block of code
//but instead of this just write "use strict" at the beginning of the code
//secure means it makes easier for us developers to make accidental errors

//example of what strict mode does

let hasDriversLisence = false;
const passTest = true;

if (passTest) hasDriversLisence = true;
if (hasDriversLisence) console.log("I can Drive :D");
