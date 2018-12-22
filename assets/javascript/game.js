var count= 25;
var showQuestion;
var correctAnswer;
var questions= [];
var round = 0;
var resultTimeout;
var notAnswered = 0;
var right = 0;
var wrong = 0;

function nextQuestion(){
  showQuestion = setInterval(timer, 1000);
}

function timer(){
    count--;
    $(".timeDisplay").html("<div>Time remaining: "+ count +"</div")
    if (count === 0){
        timesUp();    
    }
};
function timesUp(){
    round++;
    notAnswered++;
    count = 25;
    clearInterval(showQuestion);
    $(".questionArea").empty(); 
    $(".answerArea").empty();
    $(".timeDisplay").empty();
    $(".questionArea").text("Sorry time is up");
    resultTimeout = setTimeout(start, 5000);
}
function choice(){
    console.log($(this).text());
    if($(this).text() == correctAnswer){
        right++;
        round++;
        count = 25;
        clearInterval(showQuestion);
        $(".questionArea").empty(); 
        $(".answerArea").empty();
        $(".timeDisplay").empty();
        $(".questionArea").text("You are correct");
        resultTimeout = setTimeout(start, 1000);
    }
    else{
        wrong++;
        round++;
        count = 25;
        clearInterval(showQuestion);
        $(".questionArea").empty(); 
        $(".answerArea").empty();
        $(".timeDisplay").empty();
        $(".questionArea").text("Incorrect");
        // $(".questionArea").append("<img src='https://gph.is/19lgJRv' alt='eagle reaction'>")
        resultTimeout = setTimeout(start, 1000);
    }
}
function results(){
    round = 0;
    questions = [];
    $(".timeDisplay").empty();
    $("#startHere").css("display","inline-block");
    $(".questionArea").text("Results");
    $(".answerArea").text("Your correct guesses: "+ right + "  Incorrect guesses: "+ wrong +"  Not answered: "+ notAnswered);
    
    
}


function start(){
    
    clearTimeout(resultTimeout);
    if( round === 10){
        results();
        triviaApi();
        return;
    }
    $("#startHere").css("display","none");
    var newQuestion = questions.results[round].question;
    var newAnswer = questions.results[round].correct_answer;
    var answerArray = questions.results[round].incorrect_answers;
    correctAnswer = newAnswer;
    $(".questionArea").empty(); 
    $(".answerArea").empty();
    $(".questionArea").append("<div> Round: " + (round + 1) + "</div>");
    $(".timeDisplay").html("<div>Time remaining: </div>");
    answerArray.push(newAnswer);
    shuffle(answerArray);
    $('.questionArea').append("<div>"+newQuestion+"</div>");

    answerArray.forEach(function(element){
        $('.answerArea').append("<div class='col-md-12 choices rounded'>"+ element +"</div>")  
    });
    nextQuestion();
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
    
    return array;
}
  

$(document).on("click", ".choices", choice);