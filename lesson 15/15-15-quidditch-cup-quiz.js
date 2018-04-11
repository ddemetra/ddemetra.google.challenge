/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

function hasEnoughPlayers(team) {
	return team.length >= 7;
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
