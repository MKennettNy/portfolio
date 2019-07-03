$("button").click(function() {
  $('html,body').animate({
      scrollTop: $(".projectTitle").offset().top},
      'slow');
});