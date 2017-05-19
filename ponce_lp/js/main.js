$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

// $('h1').text('Hello!');

$('button').hover(function(){

  // Add the moved class to #arrow
  $('#arrow').toggleClass('moved');
    $('#mobile-arrow').toggleClass('moved');
});

if (distanceScrolled > 1600) {
  $('.icon-img').addClass('animated');
} else {
  $('.icon-img').removeClass('animated');
}



// if (distanceScrolled > 1400) {
//   $('.butterfly').addClass('animated');
// } else {
//   $('.butterfly').removeClass('animated');
// }

});
