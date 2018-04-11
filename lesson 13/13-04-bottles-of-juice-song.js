/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var lyricsOne = " bottles of juice on the wall! ";
var lyricsTwo = " bottles of juice! Take one down, pass it around... ";
var lyricsThree = " bottles of juice on the wall!";

while (num > 0) {
    switch (num) {
        case 2:
            console.log(num + lyricsOne + num + lyricsTwo + (num - 1) + " bottle of juice on the wall!");
            break;
        case 1:
            console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + lyricsThree);
            break;
        default:
            console.log(num + lyricsOne + num + lyricsTwo + (num - 1) + lyricsThree);
    }
    num -= 1;  // decrement num
}
