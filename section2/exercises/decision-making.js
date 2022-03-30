/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

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

if (bearChoice === 2) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 1) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
// Here we are using an if ... else statement. The code is giving two paths to execute in the situation.
// This statement checks a condition. If the condition (door #1) does resolves to true than we give the
// bear a hat. If the condition (door #1) resolves to false, than we are giving the bear a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing would have a new value assigned to it as a result of the first if statement execution.
// How doorChoice resolves determines what value bearClothing owns.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// The bear will still be wearing a scarf, as if you changed the variable doorChoice to equal 2.
// I think the bear was still wearing a scarf because even though the variable doorChoice was not set
// to equal 1 or 2, the value provided still wasn't 1. So the result was defaulted to whatever wasn't
// the 1 value.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
// This is an else ... if statement. This type of statement helps us create more complex statements.
// This type of statement executes a block of code when their condition evaluates to true. They must be
// be chained to the previous if statement. So, in this else ... if statement, we are being given
// choices to determine an outcome. Each choice would then yield a different ending to the story.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// The final outcome would be you ending up in a room full of snakes, which sounds terrifying.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//If the variable doorChoice is changed to equal 1 and the variable bearChoice is changed to equal 2, you will end up giving the
// bear a hat that is too small and it starts to cry.

7. What is your favorite ending?
// I grew up in the age of The Goonies and The Secret Garden so I'd go with the secret passage way!
*/
