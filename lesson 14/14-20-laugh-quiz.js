/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
	var laugh = "";
	for (var i = 1; i <= num; i++) {
		if (i === num) {
		    laugh += "ha!"; 
		} else {
		    laugh += "ha";
		}
}
		return laugh;
};

console.log(laugh(10));
