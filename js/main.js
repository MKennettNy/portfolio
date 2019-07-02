$("button").click(function() {
  $('html,body').animate({
      scrollTop: $(".projects").offset().top},
      'slow');
});