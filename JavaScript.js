$( document ).ready(function() {
	$('#ModSim_P1').click(function(){
		$('#ModSimP1Text').fadeIn(750);
	});
});

$( document ).ready(function() {
  $('#ModSim_P2').click(function(){
    $('#ModSimP2Text').fadeIn(750);
  });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 350);
        return false;
      }
    }
  });
});