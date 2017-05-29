$('#topbutton').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top
	    }, 1000);
	    return false;
	  }
	}
});


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('#topbutton').fadeIn();
  } else {
    $('#topbutton').fadeOut();
  }
});