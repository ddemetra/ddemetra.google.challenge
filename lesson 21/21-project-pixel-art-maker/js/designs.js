
// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
$("input[type= 'submit']").on("click", function(event) {
	event.preventDefault();
	// gridHeight
	var height = $("#inputHeight").val();
	// gridWidth
	var width = $("#inputWeight").val();

// make pixel canvas function to clear out old grid
$("#pixelCanvas").empty();
	makeGrid(height, width);
});

// Your code goes here!
function makeGrid(height, width) {
	for(let i = 0; i<height; i++) {
		$("#pixelCanvas").append($("<tr></tr>"));
		for(let j=0; j<width; j++) {
			$("tr").last().append($("<td></td>"));
		}
	}
	
	$("#pixelCanvas").on("mouseover mousedown", "td", function(e) {
		if (e.buttons === 1) {
			if (paint === true) {
				$(this).css("background-color", $("#colorPicker").val());
			}
			else {
				$(this).css("background-color", "");
			}
		}
	});
}

// toggle between paint/erase
$("input[name='tool']").on("change", function() {
	if ($(this).val() === "paint") {
		paint = true;
	} else if ($(this).val() === "erase") {
		paint = false;
	}
});




