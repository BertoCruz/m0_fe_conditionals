// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 4;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
//RESPONSE: we are using an if loop statement to determine what statement reads true which will then execute the block of code.
// it reads, If the variable doorChoice (currently stores int value 1) strictly equals 1, then the bearClothing variable will store the string value of "hat"
// else it will trigger the else clause, where the new variable assignment will be to that of string value "scarf."


// 2. What variable has a new value assigned to it after the first if statement executes?
//the variable bearClothing, which originally stores an empty string, will be assigned a new value after the first if statement

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// the new bearClothing string value will equal to "scarf"

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
//well first these sets of strings didn't have any console.log() codes to show any of the ending options, but this block of code shows the options for the ending.
//what happens here is that the ending will be entirely up to the bearChoice int value it is assigned to.
// this block of code starts with an if statement to read off the choices of ending depending on what that value reads.
//if the value of the bearChoice is 1 then you escape the dark room with the bear
//but if that value is not 1, but 2, you'll just hurt this mans feelings and end up a bully
//but then if neither of those first two options are the value, but perhaps 3, then you'll end up on the set of an Indiana Jones movie, good luck!
//finally if bearChoice is neither of those 3 but something else -something between 4 and infinity- then you actually end up becoming this bears bride's maid or best man at their wedding

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//if you changed the variable bearChoice to equal 3 you end up sleeping with the snakes!

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// the final outcome will be: "You tell the bear the hat is too small and it starts to cry!" --meanie!
// 7. What is your favorite ending?
//my favorite ending, and the code was changed to reflect this, was to live the opposite life to that of little red riding hood and actually kick it with bear mans
//best fwends <3
