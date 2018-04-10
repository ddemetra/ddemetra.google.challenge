/*
 * Programming Quiz: Murder Mystery (3-4)
 */

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
} else if( room === "ballroom" && suspect === "Mr. Kalehoff"){
   weapon = "poison";
   solved = true;
}

if (solved) {
   console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
