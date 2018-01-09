$(function(){
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

$(function(){
  $(".fadeable").click(function() {
    $("#walrus-fadeIn").fadeToggle();
    $("#walrus-fadeOut").fadeToggle();
  });
});

$(function() {
  $(".slideable").click(function() {
    $("#walrus-slideDown").slideToggle();
    $("#walrus-slideUp").slideToggle();
  });
});

});
