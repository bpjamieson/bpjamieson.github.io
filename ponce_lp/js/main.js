$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

// $('h1').text('Hello!');

$('button').hover(function(){

  // Add the moved class to #arrow
  $('#arrow').toggleClass('moved');
    $('#mobile-arrow').toggleClass('moved');
		  $('#cta-arrow').toggleClass('moved');
});

if (distanceScrolled > 1200) {
  $('.baseball-icon-1').addClass('animated-baseballs');
}
// else {
//   $('.baseball-icon-1').removeClass('animated-baseballs');
// }

if (distanceScrolled > 1200) {
  $('.baseball-icon-2').addClass('animated-baseballs');
}
// else {
//   $('.baseball-icon-2').removeClass('animated-baseballs');
// }

if (distanceScrolled > 1200) {
  $('.baseball-icon-3').addClass('animated-baseballs');
}
// else {
//   $('.baseball-icon-3').removeClass('animated-baseballs');
// }

if (distanceScrolled > 2020) {
  $('.icon-img').addClass('animated');
}
// else {
//   $('.icon-img').removeClass('animated');
// }
if (distanceScrolled > 2500) {
  $('.social-icons').addClass('animated-social');
}

});
