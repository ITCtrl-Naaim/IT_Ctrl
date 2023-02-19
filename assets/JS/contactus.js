$(document).ready(function () {
  $("#send").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var emailresult = EmailValidation(email);
    if (name == "" && email == "" && subject == "" && message == "") {
      $(".alert-inputN").css("visibility", "visible");
      $("input#name").focus(function () {
        $(".alert-inputN").css("visibility", "hidden");
      });
      $(".alert-inputE").css("visibility", "visible");
      $("input#email").focus(function () {
        $(".alert-inputE").css("visibility", "hidden");
      });
      $(".alert-inputS").css("visibility", "visible");
      $("input#subject").focus(function () {
        $(".alert-inputS").css("visibility", "hidden");
      });
      $(".alert-inputM").css("visibility", "visible");
      $("#message").focus(function () {
        $(".alert-inputM").css("visibility", "hidden");
      });
      
    } else if (email == "") {
      $(".alert-inputE").css("visibility", "visible");
      $("input#email").focus(function () {
        $(".alert-inputE").css("visibility", "hidden");
      });
    } else if (emailresult == false) {
      $("#alert-input-email").css("visibility", "visible");
      $("#email").focus(function () {
        $("#alert-input-email").css("visibility", "hidden");
      });
    } else if (name.length <= 3) {
      $(".alert-input-name").css("visibility", "visible");
      $("input#name").keypress(function () {
        $(".alert-input-name").css("visibility", "hidden");
      });
    } else if (subject.length <= 3) {
      $(".alert-input-subject").css("visibility", "visible");
      $("input#subject").keypress(function () {
        $(".alert-input-subject").css("visibility", "hidden");
      });
    } else if (message.length < 20) {
      $(".alert-input-message").css("visibility", "visible");
      $("#message").keypress(function () {
        $(".alert-input-message").css("visibility", "hidden");
      });
    } else {
      $(".alert-success").css("visibility", "visible");
    }
  });
  function EmailValidation(email) {
    var pattern =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return pattern.test(email);
  }
});

// == Notes i want to remember it

// function validation() {
//   var email = document.getElementById("email").value;
//   var emailid =
//     /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   var form = document.getElementById("form");
//   var alert_input = document.getElementById("alert-input-email");
//   if (email.match(emailid)) {
//     form.classList.add("valid");
//     form.classList.remove("invalid");
//     alert_input.style.visibility = "hidden";
//   } else {
//     form.classList.remove("valid");
//     form.classList.add("invalid");
//     alert_input.style.visibility = "visible";
//   }
// }
