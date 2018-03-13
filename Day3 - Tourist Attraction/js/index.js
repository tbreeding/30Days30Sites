$(document).ready(() =>{
  let showAttractions = () => {
    $("#attractions").css("display", "grid");
    $("#activities").css("display", "none");
    $("#trip").css("display", "none");
    $("#travel").css("display", "none");
  }
  let showActivities = () => {
    $("#attractions").css("display", "none");
    $("#activities").css("display", "grid");
    $("#trip").css("display", "none");
    $("#travel").css("display", "none");
  }
  let showTrip = () => {
    $("#attractions").css("display", "none");
    $("#activities").css("display", "none");
    $("#trip").css("display", "grid");
    $("#travel").css("display", "none");
  }
  let showTravel = () => {
    $("#attractions").css("display", "none");
    $("#activities").css("display", "none");
    $("#trip").css("display", "none");
    $("#travel").css("display", "grid");
  }
  $("#attractionsBtn").click(() => {
    showAttractions();
  });
  $("#attractionsBtnMob").click(() => {
    showAttractions();
  });
  $("#activitiesBtn").click(() => {
    showActivities();
  });
  $("#activitiesBtnMob").click(() => {
    showActivities();
  });
  $("#tripBtn").click(() => {
    showTrip();
  });
  $("#tripBtnMob").click(() => {
    showTrip();
  });
  $("#travelBtn").click(() => {
    showTravel();
  });
  $("#travelBtnMob").click(() => {
    showTravel();
  });
  $("#hamburger").click (() => {
    $("#mobileNav").css("width","200px"); 
    $("#hamburger").css("display", "none");
    $("#mobileNav .menu").css("display", "flex");
    $("#mobileNav .logo").css("font-size","2em");
  });
  $(".menuBtn").click (() => {
    $("#mobileNav").css("width","80px"); 
    $("#hamburger").css("display", "flex");
    $("#mobileNav .menu").css("display", "none");
    $("#mobileNav .logo").css("font-size",".9em");
  });


});