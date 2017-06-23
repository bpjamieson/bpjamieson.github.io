

$(function() {
  $('.header-box').addClass('animate-header-box');

});



$(window).on('scroll', function () {
// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);


	if (distanceScrolled > 825) {
		$('.wheelbarrow, .mower').addClass('animate-icons');
	}

	if (distanceScrolled > 1025) {
		$('.painter, .trashcan').addClass('animate-icons');
	}

	if (distanceScrolled > 1225) {
		$('.powerwasher, .driveway').addClass('animate-icons');
	}

});
