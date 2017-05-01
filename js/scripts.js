//Business logic

// var answer0 = $("form#question-zero").submit();

// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var answerZero = $("input[type=radio][name=radio-group-zero]:checked").val();

    $('#question-zero').submit(function() {
      if (answerZero = "part-time") {
        $('#part-time-info').show();
      } else {
        $('#back-or-front-q-div').show();
      }
    })
    //   $("input[type=radio][name=radio-group-zero]:checked").val();
    // });
    event.preventDefault()
  });
});



//   $(function() {
//     $("#part-time-info").show();
//   });
// });
