/**
 * @author Sharanya Haridas
 */

var video = "<iframe width=560' height='315' src='http://www.youtube.com/embed/rARN6agiW7o?html5=1' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function() {
	setNav();
});


function setNav() {

	$(".gatsby1").on("click", function() {
		$('#myModal').modal();
		$(".modal-body").html(video);
	});	


	$('#myModal').on('hidden.bs.modal', function () {
		$('#myModal iframe').removeAttr('src');
	});

}

window.onbeforeunload = function() {
  return "Are you sure you want to navigate away?";
}