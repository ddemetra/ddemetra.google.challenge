/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

 /* Directions
 * Write an if...else statement that:
 	prints "even" if the number is an even number
	prints "odd" if the number is an odd number
 *
 */

// change the value of `number` to test your if...else statement

var number = 2;

if (number % 2 === 0) {
	console.log("even");
} else {
	console.log("odd");
}

/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 1;

if (musicians <= 0) {
	console.log("not a group");
} else if (musicians === 1) {
	console.log("solo");
} else if (musicians === 2) {
	console.log("duet");
} else if (musicians === 3) {
	console.log("trio");
} else if (musicians === 4) {
	console.log("quartet");
} else {
	console.log("this is a large group");
}

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Kalehoff";
var weapon = "";
var solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
   weapon = "knife";
   solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
   weapon = "trophy";
   solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
   weapon = "pool stick";
   solved = true;
} else if(room === "ballroom" && suspect === "Mr. Kalehoff"){
   weapon = "poison";
   solved = true;
}

if (solved) {
   console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = null; // 325.00
var checkBalance = false; // true
var isActive = true; // false

// your code goes here
if (checkBalance) {
  if (isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
  }
  else if (!isActive) {
    console.log("Your account is no longer active.");
  } 
  else if(balance === 0 || balance === null || balance === isNaN) {
    console.log("Your account is empty.");
  }
  else {
    console.log("Your balance is negative. Please contact bank.");
  }
}
else {
  console.log("Thank you. Have a nice day!");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
	console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".")

}

/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23; // size L (large)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.71; // size L (large)

// your code goes here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
	console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
	console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
	console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
	console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
	console.log("2XL");
} else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
	console.log("3XL");
} else {
	console.log("N/A");
}

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : undefined);

console.log(category);


/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

// your code goes here

var education = "a Bachelor's degree";
var salary;

switch (education) {
	case "no high school diploma":
	salary = 25636;
	break;
	case "a high school diploma":
	salary = 35256;
	break;
	case "an Associate's degree":
	salary = 41496;
	break;
	case "a Bachelor's degree":
	salary = 59124;
	break;
	case "a Master's degree":
	salary = 69732;
	break;
	case "a Professional degree":
	salary = 89960;
	break;
	case "a Doctoral degree":
	salary = 84396;
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");



