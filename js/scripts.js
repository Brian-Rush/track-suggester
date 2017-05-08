//Business logic

//Creates array in case of multiple panels needing to be displayed
var infoDisplay = [];

//Function to assess which panel to display based on combined value of two questions
var doubleQuestionFunction = function(valueA, valueB, infoA, infoB, infoC) {
  var total = valueA + valueB;
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
  }
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

//question Two-Back and Three
$(document).ready(function() {
  $("#question-two-back").submit(function(event) {
    event.preventDefault();

    var answerTwoBack = parseInt($("input[type=radio][name=radio-group-two-back]:checked").val());
    var answerThree = parseInt($("input[type=radio][name=radio-group-three]:checked").val());

    doubleQuestionFunction(answerTwoBack, answerThree, "#c-sharp-net-info", "#ruby-rails-info", "#java-android-info");

    var finalDisplay = function() {
      $('.initially-hidden').hide();
      $('#question-two-back').show();
      infoDisplay.forEach(function(info) {
        $(info).show();
      });
    };
    finalDisplay();
  });
});
