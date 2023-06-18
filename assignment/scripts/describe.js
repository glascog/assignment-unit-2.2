// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// We write a conditional to check if our variable name is 'Mary', and if so, we console.log 'Hi, Mary!'. 
// Then we write a second condition to test if our variable name is not 'Mary', and if not, we console.log 'How do you do?'
// Our variable name is not 'Mary', so we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret and do not set it to any value. We also make a variable called code and set it to 123 as a number.
// We write a conditional to check if code is equal to 123, and if so, our variable secret is set to 'super' as a string and our variable code is doubled. 
// Code is equal to 123 so secret is now set to 'super' and code is doubled. Code is now 246.
// We write a conditional to check if code is greater than 250, and if so, secret is set to 'duper' as a string. 
// Code is not greater than 250, so secret remains set to 'super '.
// We console.log 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and set to true as a boolean. 
// We make a variable called age and set it to 34 as a number. 
// We make a variable called zip and set it to 55407 as a number.
// We write a conditional to check if isStudent is true AND zip is greater than 80000, and if so, we console.log 'You're a student on the West Coast!'.
// We write another conditional to check if isStudent is false OR age is less than 30, and if so, we console.log 'What are your hobbies?'.
// We write a third conditional to check if isStudent is true, and if so, we console.log 'Welcome to Prime!'.
// We write a fourth conditinal to check if all the other conditionals are false, and if so, we console.log 'How about the weather?'.
// The first two conditionals are false and the third conditional is true, so we console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne is set to 'red' but instructions say it's set to 'blue'. 
// colorOne should be set to 'blue'.
// FIX - colorTwo is set to 'blue' but instructions say it's set to 'red'.
// colorTwo should be set to 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - only colorOne will be set to 'purple' if mix is set to true, but instructions say that both colorOne and colorTwo will be set to 'purple'.
// Should add colorTwo = 'purple' to the conditional.
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

