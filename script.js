/**
 * @author Mathias Ask
 */




//This is the Youtube video of a ride on the Cyclone
var video = "<iframe width=560' height='315' src='http://www.youtube.com/embed/o2-RXqU4Lg8?html5=1' frameborder='0' allowfullscreen></iframe>";

//This is my document ready function.
$(document).ready(function() {
	setMathias();
});


function setMathias() {
	
	//This function will go off when I click the button that says "Ride!" under the Cyclone text. 
	// It will place the video in my modal window
	$(".cyclone").on("click", function() {
		$('#myModal').modal();
		$(".modal-body").html(video);
	});	
	
	// When I first uploaded the video, it would not stop playing even though I clicked close.
	// This function will prevent that.
	$('#myModal').on('hidden.bs.modal', function () {
		$('#myModal iframe').removeAttr('src');
	});
	
}