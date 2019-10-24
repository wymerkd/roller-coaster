$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();

  var age = parseInt($("input#inputAge").val());
  $("#death, #goldielocks, #baby").hide();
  console.log(age);

  if (isNaN(age)) {
    (isNaN(age));
  } else if (age > 0 && age < 5) {
    $("#baby").show();
  } else if (age >= 5 && age <18) {
    $("#goldielocks").show();
  } else if (age >= 18) {
    $("#death, #goldielocks").show();
  }
  });
});
