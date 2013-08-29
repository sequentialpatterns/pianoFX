$(document).ready(function(){
	// when user clicks on a piano key, show the note that was played.
	$('.container ul li').click(function(){
		$('p').append('<span>' + $(this).html() + '</span>');
	});
	// bonus: get the notes that user input in the field and play the notes with a second in between each note.
	$('.play').click(function(){
		// variable for input value
		var notes = $('input[type="text"]').val().toLowerCase();
		// variable using split which turns input values into an array
		var keys = notes.split("");
		// parse array to show notes.
		for(i=0; i<keys.length; i++){
			// visual cue to show each note by adding background color each second. add class and remove within a second interval.
			setTimeout("$('.container ul li:contains(" + keys[i] + ")').addClass('keystroke');", i*1000);
			setTimeout("$('.container ul li:contains(" + keys[i] + ")').removeClass('keystroke');", (i+1)*1000);
		}
	});
});