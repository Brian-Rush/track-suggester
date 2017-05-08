//Business logic
var infoDisplay = [];

var doubleQuestionFunction = function(valueA, valueB, infoA, infoB, infoC, errorMessage) {
  var total = valueA + valueB;
  var errorPrompt
  if (total === 11 || total === 21) {
    infoDisplay.push(infoA);
  } else if (total === 31) {
    infoDisplay.push(infoA, infoB);
  } else if (total === 13 || total === 23 || total === 33) {
    infoDisplay.push(infoB);
  } else if (total === 32) {
    infoDisplay.push(infoB, infoC);
  } else if (total === 12 || total === 22) {
    infoDisplay.push(infoC);
  } else {
    return errorMessage;
   }
  console.log(infoDisplay);
  // return infoDisplay;

};

// User Interface Logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var answerZero = $("input[type=radio][name=radio-group-zero]:checked").val();
    var answerOne = $("input[type=radio][name=radio-group-one]:checked").val();
    var answerTwoFront = $("input[type=radio][name=radio-group-two-front]:checked").val();

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
  });
});

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var answerTwoBack = parseInt($("input[type=radio][name=radio-group-two-back]:checked").val());
    var answerThree = parseInt($("input[type=radio][name=radio-group-three]:checked").val());

    //question Two-Back and Three
    var outcome = doubleQuestionFunction(answerTwoBack, answerThree, "#c-sharp-net-info", "#ruby-rails-info", "#java-android-info", "#help-block-3");

    infoDisplay.forEach(function(info) {
      $(info).show();
    });

    // var showOutcome = function() {
    //   ("$('" + outcome + ")'").show();
    // }
    // console.log(showOutcome());
    // showOutcome;

  });
});
