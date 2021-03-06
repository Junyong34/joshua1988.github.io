// Off Canvas Sliding
$(document).ready(function(){
  // Menu button click
  $('.sliding-menu-content').css('display', 'inherit');

  $('#js-menu-trigger, #js-menu-screen').addEventListener('click', function(e){
    $('#js-body').toggleClass('no-scroll');
    // $('#js-menu').show();

    $('#js-menu, #js-menu-screen').toggleClass('is-visible');
    $('#js-menu-trigger').toggleClass('slide close');
    $('#masthead, #page-wrapper').toggleClass('slide');

    e.preventDefault();
  });
});

// FitVids
$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$("#main").fitVids();
});

// Table of Contents title. Change text to localize
$("#markdown-toc").prepend("<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>");
