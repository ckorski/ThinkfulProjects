$(document).ready(function() {
    var questions = [{
        question: "Which country exports the most coffee by volume?",
        choices: ["JavaScript that doesn't annoy users", "JavaScript that is separate from HTML", "JavaScript that dose not affect a web page", "JavaScript that works even with scripting turned off"],
        qNum: 0,
        correct: 1,
        fact: "Writing unobtrusive JavaScript helps keep separation between a Web page's functionality and a the structure/content of the page."
    }, {
        question: "var a = 10; if(a > 5) { a = 7; } alert(a); }",
        choices: ["7", "10", "null", "undefined"],
        qNum: 1,
        correct: 0,
        fact: "You declared a local variable and set its value to 10. Its value is indeed greater than 5, so you set its value to 7. You then alert this new value, 7."
    }, {
        question: "Java Script entities start with ____________ and end with ______________",
        choices: ["Semicolon, colon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon"],
        qNum: 2,
        correct: 3,
        fact: "JS ends with a semicolon"
    }, {
        question: "Which of these is NOT a valid comment in JavaScript?",
        choices: ["// This is a comment", "/* This is a comment */", "/*This is a comment", "<!-- This is a comment"],
        qNum: 3,
        correct: 2,
        fact: "<!--, whilst usually used for HTML comments, is also valid for comments in javascript."
    }, {
        question: "What is the correct JavaScript syntax to write 'Hello World' into the DOM? ",
        choices: ["document.write('Hello World')", "('Hello World')", "'Hello World", "console.log('Hello World')"],
        qNum: 4,
        correct: 0,
        fact: "document.write can be used to write directly to the page."
    }]

    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;

    $("#question_wrapper").on("click", "#submit", function() {
        currentQuestion++;
        nextQuestion();
    });

    $("#question_wrapper").on("click", "#retry_button", function() {
        numberCorrect = 0;
        currentQuestion = 0;
        var newQuestion = '<span class="question">' + questions[currentQuestion].question + '</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[currentQuestion].choices[0] + '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">' + questions[currentQuestion].choices[1] + '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">' + questions[currentQuestion].choices[2] + '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">' + questions[currentQuestion].choices[3] + '</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#note").html("");
    });


    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#note").hide();
            var newQuestion = '<span class="question">' + questions[currentQuestion].question + '</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[currentQuestion].choices[0] + '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">' + questions[currentQuestion].choices[1] + '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">' + questions[currentQuestion].choices[2] + '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">' + questions[currentQuestion].choices[3] + '</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact = questions[currentQuestion - 1].fact;
            $("#note").html(lastFact).fadeIn();
        } else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#note").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact = questions[currentQuestion - 1].fact;
            $("#note").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered ' + numberCorrect + ' question.'
                $("#answer_holder").html(finalScore);
            } else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered ' + numberCorrect + ' questions.'
                $("#answer_holder").html(finalScore);
            }
        }
    }
});