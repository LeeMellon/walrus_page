$(function(){
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".fadeable").click(function() {
    $("#walrus-fadeIn").fadeToggle();
    $("#walrus-fadeOut").fadeToggle();
  });

  $(".slideable").click(function() {
    $("#walrus-slideDown").slideToggle();
    $("#walrus-slideUp").slideToggle();
  });

  $("#normal").click(function(){
    $("body").toggleClass("inverted", "normal");
  });

});
