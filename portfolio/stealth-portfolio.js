
//for Sorin Ruse
//This code snippet performs the function of animated scroll on nav items
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    var target = $(this.hash);
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1500
      );
    }
  });
});




