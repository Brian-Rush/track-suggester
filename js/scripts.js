//Business logic

// var doubleQuestionFunction = function(valueA, valueB, infoA, infoB, infoC, errorMessage) {
//   var total = valueA + valueB;
//   if (total === 11 || total === 21) {
//     var infoDisplay = infoA;
//   } else if (total === 31) {
//     var infoDisplay = infoA;
//     var infoDisplay2 = infoB;
//   } else if (total === 13 || total === 23 || total === 33) {
//     var infoDisplay = infoB;
//   } else if (total === 32) {
//     var infoDisplay = infoB;
//     var infoDisplay = infoC;
//   } else if (total === 12 || total === 22) {
//     var infoDisplay = infoC;
//   }

  // if (infoDisplay2 === undefined)
  // if (Array.isArray(display) === true) {
  //   infoDisplay.forEach
  // }
  // if (Number.isInteger(display2) === true)
  // infoDisplay.show()
  // infoDisplay2.show()
// }


// User Interface Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var answerZero = $("input[type=radio][name=radio-group-zero]:checked").val();
    var answerOne = $("input[type=radio][name=radio-group-one]:checked").val();
    var answerTwoFront = $("input[type=radio][name=radio-group-two-front]:checked").val();
    var answerTwoBack = parseInt($("input[type=radio][name=radio-group-two-back]:checked").val());
    var answerThree = parseInt($("input[type=radio][name=radio-group-three]:checked").val());


    // Question Zero
    if (answerZero == "part-time") {
      $('.initially-hidden').hide();
      $('#part-time-info').show();
    } else if (answerZero == "full-time") {
      $('.initially-hidden').hide();
      $('#question-zero').hide();
      $('#question-one').show();
    }

    // Question One
    if (answerOne == "look-interact") {
      $('.initially-hidden').hide();
      $('#question-two-front').show();
    } else if (answerOne == "under-hood") {
      $('.initially-hidden').hide();
      $('#question-two-back').show();
    }

    // Question Two-Front
    if (answerTwoFront == "look") {
      $('.initially-hidden').hide();
      $('#css-design-info').show();
    } else if (answerTwoFront == "interact") {
      $('.initially-hidden').hide();
      $('#php-react-info').show();
    }

    // //question Two-Back
    // doubleQuestionFunction(answerTwoBack, answerThree, #c-sharp-net-info, #ruby-rails-info, #java-android-info) {
    //   display.show();
        // if (display2.val()) {
        //   display2.show();
        // }
    // }
  });
});
