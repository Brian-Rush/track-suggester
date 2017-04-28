//Business logic

//0. Would you like to study full-time or part-time?
//user submits
//if full time, display Q1.
//if part time, display info about part time course and how they can join up with other track later.

// var determine = function(full-or-part-time, )








// var determine = function(full-or-part-time, marsupial) {
//   if (wiggle === "jeff" && marsupial === "koala") {
//     return 'img/patsy.jpg';
//   }
//   if (wiggle === "sam" && marsupial === "opossum") {
//     return'img/patsy.jpg';
//   }
//   if (wiggle === "phil" && marsupial === "echidna") {
//     return 'img/patsy.jpg';
//   }
//   if (wiggle === "greg" && marsupial === "kangaroo") {
//     return 'img/patsy.jpg';
//   }
//
//   if (wiggle === "jeff" && marsupial === "kangaroo") {
//     return 'img/gilbert.jpg';
//   }
//   if (wiggle === "murray" && marsupial === "koala") {
//     return 'img/gilbert.jpg';
//   }
//   if (wiggle === "phil" && marsupial === "opossum") {
//     return 'img/gilbert.jpg';
//   }
//   if (wiggle === "greg" && marsupial === "echidna") {
//     return 'img/gilbert.jpg';
//   }
//
//   if (wiggle === "sam" && marsupial === "koala") {
//     return 'img/kenneth.jpg';
//   }
//   if (wiggle === "murray" && marsupial === "kangaroo") {
//     return 'img/kenneth.jpg';
//   }
//   if (wiggle === "jeff" && marsupial === "echidna") {
//     return 'img/kenneth.jpg';
//   }
//   if (wiggle === "greg" && marsupial === "opossum") {
//     return 'img/kenneth.jpg';
//   }
//
//   if (wiggle === "phil" && marsupial === "koala") {
//     return 'img/roseanne.jpg';
//   }
//   if (wiggle === "sam" && marsupial === "kangaroo") {
//     return 'img/roseanne.jpg';
//   }
//   if (wiggle === "murray" && marsupial === "echidna") {
//     return 'img/roseanne.jpg';
//   }
//   if (wiggle === "jeff" && marsupial === "opossum") {
//     return 'img/roseanne.jpg';
//   }
//
//   if (wiggle === "greg" && marsupial === "koala") {
//     return 'img/shia.jpg';
//   }
//   if (wiggle === "phil" && marsupial === "kangaroo") {
//     return 'img/shia.jpg';
//   }
//   if (wiggle === "sam" && marsupial === "echidna") {
//     return 'img/shia.jpg';
//   }
//   if (wiggle === "murray" && marsupial === "opossum") {
//     return 'img/shia.jpg';
//   }
// }
//


// User Interface Logic
$(document).ready(function() {
  // $("button#zeroth-question-button").submit(function() {
  //   var input0 = $("form input:radio")
  //
  // $("#full-or-part-time-q-div").submit(function(){
  //
  // })
  // });
  //
  // //form submit handler
  //   //Do form validation (if field blank gives inline message).
  //   //evaluate field input. figure out logic (which combos go where)
  //   //show the appropriate div based on evaluation
  //
  // $("#celeb-form").submit(function(e) {
  //   e.preventDefault();
  //
  //   var input = $("form input:radio")
  //
  //   var wiggle = $('#wiggle').val();
  //   var marsupial = $('#marsupial').val();
  //   var failure = false;

    if (!$("#full-or-part-time-q-div").val()) {
      $('#helpBlock0').show();
    } else {
      $('#helpBlock0').hide();
  //
  //   }
  //   if (!$('#urkel-false').prop('checked')) {
  //     $('#helpBlock2').show();
  //     $('#urkel-div').addClass('has-error');
  //     failure = true;
  //   } else {
  //     $('#helpBlock2').hide();
  //     $('#urkel-div').removeClass('has-error');
  //   }
  //   if (!$("#marsupial").val()) {
  //     $('#helpBlock3').show();
  //     $('#marsupial').parent().addClass('has-error');
  //     failure = true;
  //   } else {
  //     $('#helpBlock3').hide();
  //     $('#marsupial').parent().removeClass('has-error');
  //   }
  //   if (failure === true) {
  //     return;
  //   }
  //
  //   window.location = determine(wiggle, marsupial);
  // });
});





//form submit handler
  //Do form validation (if field blank gives inline message).
  //evaluate field input. figure out logic (which combos go where)
  //show the appropriate div based on evaluation

  // $("#celeb-form").submit(function(e) {
  //   e.preventDefault();
  //
  //   var wiggle = $('#wiggle').val();
  //   var marsupial = $('#marsupial').val();
  //   var failure = false;
  //
  //   //0. Would you like to study full-time or part-time?
  //   //user submits
  //   //if full time, display Q1.
  //   //if part time, display info about part time course and how they can join up with other track later.
  //
  //   if (!$("#wiggle").val()) {
  //     $('#helpBlock1').show();
  //     $('#wiggle').parent().addClass('has-error');
  //     failure = true;
  //   } else {
  //     $('#helpBlock1').hide();
  //     $('#wiggle').parent().removeClass('has-error');
  //   }
  //   if (!$('#urkel-false').prop('checked')) {
  //     $('#helpBlock2').show();
  //     $('#urkel-div').addClass('has-error');
  //     failure = true;
  //   } else {
  //     $('#helpBlock2').hide();
  //     $('#urkel-div').removeClass('has-error');
  //   }
  //   if (!$("#marsupial").val()) {
  //     $('#helpBlock3').show();
  //     $('#marsupial').parent().addClass('has-error');
  //     failure = true;
  //   } else {
  //     $('#helpBlock3').hide();
  //     $('#marsupial').parent().removeClass('has-error');
  //   }
  //   if (failure === true) {
  //     return;
  //   }
  //
  //   window.location = determine(wiggle, marsupial);
  });
});


//1.Are you more interested in the way things work 'under the hood' or are you more interested in the way things look and the way people interact with things?

// User pushes button. UI shows next Q based on their input.

//IF 'UNDER THE HOOD' ask two Qs
//2A. What kind of environment would you like to work in?
//a structured environment with good benefits and clearly defined protocols
//a casual but fast-paced environment with lots of variety, plenty of creative freedom, and potentially long hours
//a very fast-paced environment with lots of excitement, uncertainty, and learning

//3ai. if structured display Java/Android
//3aii. if casual display Ruby, Java, (note about agencies serving enterprise = wide range of languages used)
//3aiii. if
//3aiv. if

//2aa. Which of these platforms would you most like to work with? Microsoft / PC, Android, Apple, No preference/Don't Know

//3aai. if Microsoft, show C#/.net info,
//3aai. if Android, show Java/Android info,
//3aai. if Apple, show Ruby/Rails
//3aai. if no pref, show Ruby/Rails, with links to others




//2b. IF LOOK AND INTERACTION
//in the previous question which is more interesting to you: how people interact with things or how things look?

//if interaction, display info paragraph about React track

//if looks, display info paragraph about css/design track
