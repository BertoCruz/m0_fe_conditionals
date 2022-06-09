// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false


// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("is numberTeachers less than numberStudents? ", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// this will log the comparison of whether 4 is less than 9
// this will log true.

var books = 3;
console.log(4 < books);
// This will compare whether 4 is less than the variable book, which stores the value of 3
// this will log false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// this will compare whether the variable friends (which stores the int value of 6)
//is greater than the variable siblings (which stores the int value of 2)
//this will log true

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
//this will compare whether the variable attendees (which stores the int value of 9)
//is not equal to the variable meals (which store the int value of 8)
//this will log true


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age)
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: that final line of code came back as a string of 1, because this comparison
//did not compare to another boolean, but an integer, i read that when compareds to a numberDogs
// the comparison will come back as a string.
