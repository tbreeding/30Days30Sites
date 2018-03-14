$(document).ready(() => {
  //Make the top navigation bar dropdowns invisible when page loads
  $(".subMenuContent").slideToggle(0);
  $(".langMenuContent").slideToggle(0);
  //Animate the top navigation bar dropdown menus
  $("#subscription").click(function() {
    $(".subMenuContent").slideToggle(300);
  });
  $(".subMenuContent a").click(function() {
    event.stopPropogation();
    $(".subMenuContent").slideToggle(200);
  });
  $(".login i").click(function() {
    $(".langMenuContent").slideToggle(300);
  });
  $(".langMenuContent a").click(function() {
    $(".langMenuContent").slideToggle(200);
  });
  //Animate the Side Menu
  $("#sideNavBtn").click(function() {
    $("#sideNav").toggleClass("animateSideNavShrink"); 
    $("#sideNav").toggleClass("animateSideNavGrow"); 
    $("#sideNavBtn").toggleClass("fa-chevron-left");
    $("#sideNavBtn").toggleClass("fa-chevron-right");
    $("#sideNavContent *").toggleClass("visible");
  });
  //Gallery Interface
  $("#g1").hover(function() {
    $("#g1 .content").css({"display":"flex","background-color": "rgba(240, 240, 240, .8)"});
    $("#g1 .content p, #g1 .content div, #g1 .content span").css("display","block");
  }, function() { 
    $("#g1 .content *").css("display","none");
    $("#g1 .content").css("background-color", "rgba(240, 240, 240, 0)");
  });
  $("#g2").hover(function() {
    $("#g2 .content").css({"display":"flex","background-color": "rgba(240, 240, 240, .8)"});
    $("#g2 .content p, #g2 .content div, #g2 .content span").css("display","block");
  }, function() { 
    $("#g2 .content *").css("display","none");
    $("#g2 .content").css("background-color", "rgba(240, 240, 240, 0)");
  });
  $("#g3").hover(function() {
    $("#g3 .content").css({"display":"flex","background-color": "rgba(240, 240, 240, .8)"});
    $("#g3 .content p, #g3 .content div, #g3 .content span").css("display","block");
  }, function() { 
    $("#g3 .content *").css("display","none");
    $("#g3 .content").css("background-color", "rgba(240, 240, 240, 0)");
  });
  $("#g4").hover(function() {
    $("#g4 .content").css({"display":"flex","background-color": "rgba(240, 240, 240, .8)"});
    $("#g4 .content p, #g4 .content div, #g4 .content span").css("display","block");
  }, function() { 
    $("#g4 .content *").css("display","none");
    $("#g4 .content").css("background-color", "rgba(240, 240, 240, 0)");
  });
  $("#g5").hover(function() {
    $("#g5 .content").css({"display":"flex","background-color": "rgba(240, 240, 240, .8)"});
    $("#g5 .content p, #g5 .content div, #g5 .content span").css("display","block");
  }, function() { 
    $("#g5 .content *").css("display","none");
    $("#g5 .content").css("background-color", "rgba(240, 240, 240, 0)");
  });
  $("#g6").hover(function() {
    $("#g6 .content").css({"display":"flex","background-color": "rgba(240, 240, 240, .8)"});
    $("#g6 .content p, #g6 .content div, #g6 .content span").css("display","block");
  }, function() { 
    $("#g6 .content *").css("display","none");
    $("#g6 .content").css("background-color", "rgba(240, 240, 240, 0)");
  });
  $("#g7").hover(function() {
    $("#g7 .content").css({"display":"flex","background-color": "rgba(240, 240, 240, .8)"});
    $("#g7 .content p, #g7 .content div, #g7 .content span").css("display","block");
  }, function() { 
    $("#g7 .content *").css("display","none");
    $("#g7 .content").css("background-color", "rgba(240, 240, 240, 0)");
  });
  $("#g8").hover(function() {
    $("#g8 .content").css({"display":"flex","background-color": "rgba(240, 240, 240, .8)"});
    $("#g8 .content p, #g8 .content div, #g8 .content span").css("display","block");
  }, function() { 
    $("#g8 .content *").css("display","none");
    $("#g8 .content").css("background-color", "rgba(240, 240, 240, 0)");
  });
});