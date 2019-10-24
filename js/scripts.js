$(document).ready(function() {
  var age = parseInt(prompt("Enter your age"));

  if (age <5) {
    $("#baby").show();
  } else if (age <18) {
    $("#goldielocks").show();
  } else if (age=>18) {
    $("#death").show();
    $("#goldielocks").show();
  }

});
