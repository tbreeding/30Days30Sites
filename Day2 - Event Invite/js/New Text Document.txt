$(document).ready(() => {
  let menuBtn = document.querySelector(".dropDownMenuBtn"); 
  let menuItem = document.querySelectorAll(".ddBtn");
  let regBtn = document.querySelector(".ddRegister");
  let submitBtn = document.querySelector(".submitBtn");

  let menuClick = () => {
    $(".dropDownContent").toggleClass("mobileClick");
  }
  let showHome = () => {
    $("#home").css("display", "grid");
    $("#who").css("display", "none");
    $("#what").css("display", "none");
    $("#details").css("display", "none");
    $("#register").css("display", "none");
  }
  let showWho = () => {
    $("#home").css("display", "none");
    $("#who").css("display", "grid");
    $("#what").css("display", "none");
    $("#details").css("display", "none");
    $("#register").css("display", "none");
  }
  let showWhat = () => {
    $("#home").css("display", "none");
    $("#who").css("display", "none");
    $("#what").css("display", "grid");
    $("#details").css("display", "none");
    $("#register").css("display", "none");
  }
  let showDetails = () => {
    $("#home").css("display", "none");
    $("#who").css("display", "none");
    $("#what").css("display", "none");
    $("#details").css("display", "grid");
    $("#register").css("display", "none");
  }
  let showReg = () => {
    $("#home").css("display", "none");
    $("#who").css("display", "none");
    $("#what").css("display", "none");
    $("#details").css("display", "none");
    $("#register").css("display", "grid");
  }
  let submit = () => {
    let regName = $("#regName").val();
    let regEmail = $("#regEmail").val();
    if (regName == "" || regEmail == "") {
      $("#blnk").css("display", "block");
    } else {
      $("#blnk").css("display", "none");
      $("#thanks").css("display", "block");
      $("#regName").val("");
      $("#regEmail").val("");
    }
  }
  $(menuBtn).click(() => {
    menuClick();
  });
  $(menuItem).click(() => {
    menuClick();
  });
  $(regBtn).click(() => {
    menuClick();
  });
  $(submitBtn).click(() => {
    submit();
  });
  $("#btnHome").click(() => {
    showHome();    
  });
  $("#ddBtnHome").click(() => {
    showHome();    
  });
  $("#btnWho").click(() => {
    showWho();
  });
  $("#ddBtnWho").click(() => {
    showWho();
  });
  $("#btnWhat").click(() => {
    showWhat();    
  });
  $("#ddBtnWhat").click(() => {
    showWhat();    
  });
  $("#btnDetails").click(() => {
    showDetails();    
  });
  $("#ddBtnDetails").click(() => {
    showDetails();    
  });
  $("#btnRegister").click(() => {
    showReg();    
  });
  $("#ddBtnRegister").click(() => {
    showReg();    
  });
});

