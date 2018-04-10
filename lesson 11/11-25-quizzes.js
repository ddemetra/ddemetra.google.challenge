/*
 * Programming Quiz: First Expression (2-1)
 *
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

/*
* Quiz-1
* Write an expression that uses at least 3 different arithmetic operators.
* The expression should equal 42.
* Hint: +, -, *, /, and % are possible arithmetic operators
*/ 

// this expression equals 4, change it to equal 42
console.log(1 + 5 - 2 + 38);
console.log(80/2 +10 -8);
console.log(2%4 +40);

Output:
42
42
42


/*
 * Quiz-2: Converting Tempatures
 
 * Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
 *
 *     F = C x 1.8 + 32
 *
 * Log the fahrenheit variable to the console.
 *
 */

var celsius = 12;
var fahrenheit = celsius x 1.8 + 32;

console.log(fahrenheit);

Output:
53.6

/*
 * Quiz-3: Favorite Food (2-3)
 */

console.log(/"Souvlaki");

Output:
Souvlaki


/*
 * Quiz-4: String Equality for All (2-4)
 */

// before var answer = "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal";

// fix the right side of the expression
var answer = "ALL Strings are CrEaTeD equal" == "LL Strings are CrEaTeD equal";
console.log(answer);

Output: 
true

/*
 * Quiz-5: All Tied Up (2-5)
 */

/*Directions:
Build a single string that resembles the following joke.

Why couldn't the shoes go out and play?
	They were all "tied" up!
*/ 

var joke = "Why couldn't the shoes go out and play? \n They were all \"tied\" up!";
console.log(joke);

Output:
Why couldn't the shoes go out and play?
	They were all "tied" up!

/*
 * Quiz-6: Yosa Buson (2-6)
		Blowing from the west
		Fallen leaves gather
		In the east.
 */

var haiku = "Blowing from the west\n" + "Fallen leaves gather\n" + "In the east.";
console.log(haiku);

Output:
Blowing from the west
Fallen leaves gather
In the east.

/*
 * Programming Quiz: Semicolons! (2-8)
 */

var thingOne = "red";
var thingTwo = "blue";

console.log(thingOne + " " + thingTwo);

Output:
red blue

/*
 * Programming Quiz: What's my Name? (2-9)
 */

var fullName = "Jane Smith";

/*
 * Programming Quiz: Out to Dinner (2-10)
 */

var bill = 10.25 + 3.99 + 7.15;
var tip = 0.15 * bill;
var total = tip + bill;
console.log("$" + total.toFixed (2));

Output: 
$ 24.60

/*
 * Programming Quiz: MadLibs (2-11)
Mad Libs is a word game where players have fun substituting words for blanks in a story.
For this exercise, use the adjective variables below to fill in the blanks
and complete the following message.

"The Intro to JavaScript course is __________. James and Julia are so __________.
I cannot wait to work through the rest of this __________ content!"
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";

Assign the resulting string to a variable called madLib.

 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

// your code goes here

var madLib = "The Intro to JavaScript course is "+ adjective1 + ". James and Julia are so "+ adjective2 + ". I cannot wait to work through the rest of this "+ adjective3 + " content!";
console.log(madLib);


/*
 * Programming Quiz: One Awesome Message (2-12)
 *
"Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
"Hi, my name is James. I love baseball. In my spare time, I like to read."
 * 1. Create the variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and, using string concatenation 
      and the variables above, create an awesome message.
 * 3. Print the awesomeMessage variable to the console.
 */
 
/*
 * Notes:
 * - Using the above as an example, firstName would have been assigned to
 *   "Julia", interest to "cats", and hobby to "play video games".
 * - Be sure to include spaces and periods where necessary!
 */

// Add your code here

var firstName = "Julia";
var interest = "cats";
var hobby = "play video games";

var awesomeMessage = "Hi, my name is "+ firstName + "." + " I love " + interest + "." +  " In my spare time, I like to "+ hobby + ".";
console.log(awesomeMessage);

Output:
Hi, my name is Julia. I love cats. In my spare time, I like to play video games.











