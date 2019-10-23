//Business Logic




//User Logic
$(document).ready(function() {

  // $("input[type="radio"]").click(function () {
  //
  // });

  $(".form-horizontal").submit(function(event) {

    var firstName = $(".firstName").val();
    var lastName = $(".lastName").val();
    var address1 = $(".address1").val();
    var address2 = $(".address2").val();
    var city = $(".city").val();
    var state = $(".state").val();
    var zip = $(".zip").val();
    var choice = $("input[name=select]:checked").val();

    $("#selection").text(choice);
    $("#userFirst").text(" " + firstName + " ");
    $("#userLast").text(lastName);
    $("#address1").text(address1);
    $("#address2").text(address2);
    $("#city").text(city);
    $("#state").text(state);
    $("#zip").text(zip);

    $(".confirmation").show();

    event.preventDefault();
  });

  $(".btn-warning").click(function() {
    $(".survey").show();
  });

});
