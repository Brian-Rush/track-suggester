//Business logic




// User Interface Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var answerZero = $("input[type=radio][name=radio-group-zero]:checked").val();
    var answerOne = $("input[type=radio][name=radio-group-one]:checked").val();
    var answerTwoFront = $("input[type=radio][name=radio-group-two-front]:checked").val();
    var answerTwoBack = $("input[type=radio][name=radio-group-two-back]:checked").val();
    var answerThree = $("input[type=radio][name=radio-group-three]:checked").val();


    // Question Zero
    if (answerZero === "part-time") {
      $('.initially-hidden').hide();
      // $('#question-zero').hide();
      $('#part-time-info').show();
    } else if (answerZero === "full-time") {
      $('.initially-hidden').hide();
      $('#question-zero').hide();
      $('#question-one').show();
    }

    // Question One
    if (answerOne === "look-interact") {
      $('.initially-hidden').hide();
      $('#question-two-front').show();
    } else if (answerOne === "under-hood"){
      $('.initially-hidden').hide();
      $('#question-two-back').show();
    }

    // Question Two-Front
    if (answerTwoFront === "look") {
      $('.initially-hidden').hide();
      $('#css-design-info').show();
    } else if (answerTwoFront === "interact") {
      $('.initially-hidden').hide();
      $('#php-react-info').show();
    }
  });
});
