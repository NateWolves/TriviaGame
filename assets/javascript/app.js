

// var question0 = "Testing the first question";
// var question1 = "testing the 2nd";
// var question2 = "Third";
// var question3 = "last";
// var answer0 = ["the correct answer", "one answer", "and another answer", "this answer"]
// var answer1 = ["the correct answer", "one answer", "and another answer", "this answer"]
// var answer2 = ["the correct answer", "one answer", "and another answer", "this answer"]
// var answer3 = ["the correct answer", "one answer", "and another answer", "this answer"]
var questions= [];
var correct = 0;
var incorrect = 0;
var notAnswered = 0;
var correctAnswer;
var round;

var count = 0;
var intervalId = setInterval(function(){

})


function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 30000);

}function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextQuestion(){
  count++;
  setTimeout(trivia, 4000);
  if (count = questions.results.length){
    $("#questionArea").empty(); 
    $("#answerArea").empty();
    $('#questionArea').text("Results:")
    // display button to start again
  }
};


function trivia(){
  for (var i=0; i<questions.results.length; i++){

      var newQuestion = questions.results[count].question;
      var newAnswer = questions.results[count].correct_answer;
      var answerArray = questions.results[count].incorrect_answers;
      correctAnswer = newAnswer;
      $("#questionArea").empty(); 
      $("#answerArea").empty();
      answerArray.push(newAnswer);
      shuffle(answerArray);
      answerArray.forEach(function(i) {
        $('answerArea').append("<div>"+ answerArray[i]+"</div>")
      });

  }};




function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  console.log(array);
  return array;
}

function endTimer(){
  $("#questionArea").empty(); 
  $("#answerArea").empty();
  $('#questionArea').text("Sorry time is up")
};

var queryURL = "https://opentdb.com/api.php?amount=10&category=27&type=multiple";

function triviaApi(){
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  questions = response;
}
)};

triviaApi();

// $(document).on("click", ".choices", endTimer);


// if( this === correctAnswer){
//   $("#questionArea").text("You are correct!");
// }
// else if (this !== correctAnswer){
//   $("#questionArea").text("You chose poorly...");
// }
// else {$('#questionArea').text("Sorry time is up")};
//   var newQuestion = $('<div>');





      // $(".questionArea").text(newQuestion);
      // for (var h =0; h< answerArray.length; h++){
      //   var box = $("<div>");
      //   box.text(answerArray[h]);
      //   $('answerArea').append(box);
      //  };
//   newQuestion.text(questions.results[0].question);
//   console.log(questions.results[0].question);
//   $('question').append(newQuestion);
  // var newRow =$("<tr>");
  // var newTitle =$('<td>');
  // var newYear =$('<td>');
  // var newActors =$('<td>');
  // newTitle.text(response.Title);
  // newYear.text(response.Title);
  // newActors.text(response.Actors);
  // newRow.append(newTitle);
  // newRow.append(newYear);
  // newRow.append(newActors);
  // $('tbody').append(newRow);
  // Create and save a reference to new empty table row
  // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
  // Append the td elements to the new table row
  // Append the table row to the tbody element
