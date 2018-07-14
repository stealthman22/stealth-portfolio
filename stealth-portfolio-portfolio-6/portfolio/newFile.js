/*
$('.test.nav-link .nav-item .navbar-nav').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $().offset().top
    }, 1500);
});


$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
*/
/*
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })
 

 
/*
 $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
*/
//for Sorin Ruse
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    var target = $(this.hash);
    if (target.length) {
      $("html, body").animate({
        scrollTop: target.offset().top
      }, 1500);
    }
  });
});

var shiftWindow = function() { scrollBy(0, -50) }; // adjust -50 based on the height of your navbar
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
