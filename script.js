/**
 * @author Sharanya Haridas
 */

//This is the iFrame markup for the YouTube video. 
//I got it by going to "share" option on the YouTube page and then getting "embed" code




var video = "<iframe width=560' height='315' src='http://www.youtube.com/embed/rARN6agiW7o?html5=1' frameborder='0' allowfullscreen></iframe>";

//document ready function sets up navigation when page loads

$(document).ready(function() {
	Nav();
});

function Nav() {
	
	//When "See Trailer" button is clicked, this event listener  opens our modal window
	// It inserts the video into the ".modal-body" container

	$(".gatsby1").on("click", function() {
		$('#myModal').modal();
		$(".modal-body").html(video);
	});	


//This event listener "fires" when the modal window is closed by pressing "x" button
	//It removes the "src" attribute from the iframe, thus killing the video
	
	$('#myModal').on('hidden.bs.modal', function () {
		$('#myModal iframe').removeAttr('src');
	});

}

//this is an additional element I added that asks you if you're sure you want to navigate away
//when you try to close the window the two options are leave page or stay on page

window.onbeforeunload = function() {
  return "Are you sure you want to navigate away?";
}