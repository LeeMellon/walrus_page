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
    $("body").removeClass("green-background yellow-background red-background");
    $("body").toggleClass("inverted", "normal");
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

});
