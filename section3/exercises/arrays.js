/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];

console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
var animals = ["Zebra", "Giraffe", "Elephant"];

console.log(animals.length);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
var animals = ["Zebra", "Giraffe", "Elephant"];
var removed = animals.splice(2, 1, "Gorilla")

console.log(animals) // ["Zebra", "Giraffe", "Gorilla"]

// animals is ["Zebra", "Giraffe", "Gorilla"]
// removed is ["Elephant"]

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
var animals = ["Zebra", "Giraffe", "Gorilla"];
var removed = animals.splice(2, 0, "Flamingo")

console.log(animals) // ["Zebra", "Giraffe", "Flamingo", "Elephant", "Gorilla"]

// animals is ["Zebra", "Giraffe", "Flamingo", "Elephant", "Gorilla"]
// removed is [], no elements removed

// YOU DO: Write code that will log the String "Elephant" in the animals array
var animals = ["Zebra", "Giraffe", "Flamingo", "Gorilla"]
var total = animals.push("Elephant")

console.log(animals) //["Zebra", "Giraffe", "Flamingo", "Gorilla", "Elephant"]
console.log(total) // 5
//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["Potatoes", "Carrots", "Tacos", "Ribs", "Corn"]

console.log(foods);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
var foods = ["Potatoes", "Carrots", "Tacos", "Ribs", "Corn"]

console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
var foods = ["Potatoes", "Carrots", "Tacos", "Ribs", "Corn"]
var total = foods.push("Broccoli")

console.log(foods) // ["Potatoes", "Carrots", "Tacos", "Ribs", "Corn", "Broccoli"]
console.log(total) // 6

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
var foods = ["Potatoes", "Carrots", "Tacos", "Ribs", "Corn", "Broccoli"]
var total = foods.pop("Broccoli")

console.log(foods) // ["Potatoes", "Carrots", "Tacos", "Ribs", "Corn"]
console.log(total) // 5

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
var foods = ["Potatoes", "Carrots", "Tacos", "Ribs", "Corn"]
var total = foods.push("Queso", "Coleslaw", "Bacon")

console.log(foods) //["Potatoes", "Carrots", "Tacos", "Ribs", "Corns", "Queso", "Coleslaw", "Bacon"]
console.log(total) // 8

// YOU DO: Remove the food that is in index position 0.
var foods = ["Potatoes", "Carrots", "Tacos", "Ribs", "Corn", "Queso", "Coleslaw", "Bacon"]
var total = foods.shift("Potatoes")

console.log(foods) // [Carrots", "Tacos", "Ribs", "Corns", "Queso", "Coleslaw", "Bacon"]
console.log(total) // 7

//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: Pinterest: Arrays might be storing data in the different boards users create
// 2: Pinterest: Arrays might be storing data in the different tags uses attach to a post. These tags will
// also be used in arrays when a user searches a keyword or topic
// 3: A retailer site like ASOS.com. Arrays might be used when browsing, ie. shirts, skirts, etc. Arrays
// might also be used on a site like this when filtering a search, selecting a specific color or size.


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of the project
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
The can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";

// Write your conditional here

// console.log("Do you have enough of a charge?", percentBatteryLeft > 15);
// console.log("Do you have a charger?", hasCharger === true);
// console.log("What type of charger is it?", chargerType == "car");


var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";
//This line is saying that the charge on the phone is less than 15%, that the person does
//have a charger, and that it is a car charger. Because code is true it is logged in console,
// and the subsequent code is ignored.
if (percentBatteryLeft < 15 && hasCharger !== false && chargerType === "car") {

  console.log('need to charge');
  //This line is saying that the person does have a charger and that it is a car charger.
} else if (hasCharger === true && chargerType === "car" ) {

  console.log('can charge in uber');
  //This line is saying that the phone does not have 15% charge, therefore would not be
  //able to call uber.
} else if (percentBatteryLeft <= 15 ) {

  console.log('cannot call Uber');
}

//This line is stating that the phone does not have 15% charge or a charger so they cannot
//call an uber.
var percentBatteryLeft = 12;
var hasCharger = true;
if (percentBatteryLeft < 15 || hasCharger === false) {

  console.log('cannot call uber')
}

// This line stating that they have 15% or more charge, which means they can call an uber,
// they also have a charger but it is not a car charger.
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";
if (percentBatteryLeft >= 15 || hasCharger == true || chargerType !== "car") {

  console.log('cannot call uber')
}

// This code stating that they have less than 15% charge but they do have a car charger.
// So they are able to call an uber.
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";
if (percentBatteryLeft < 15 && hasCharger == true && chargerType == "car") {

  console.log('can call uber')
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
