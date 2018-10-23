$(document).ready(function () {

    var correct = document.getElementById("correct");
    var incorrect = document.getElementById("incorrect");
    var unanswered = document.getElementById("unanswered");
    var questionArray = [
        {
            question: "Which of these bones is hardest to break?",
            answer: "Femur",
            possibleAnswers: [
                 "Cranium",
                "Femur",
                "Humerus",
                "Tibia"],
            flags: [false, true, false, false]
        },
        {
            question: "Which type of rock is created by intense heat AND pressure?",
            answer: "Metamorphic",
            possibleAnswers: [
                "Sedimentary",
                "Igneous",
                "Diamond",
                "Metamorphic"],
            flags: [false, false, false, true]
        },
        {
            question: "How many planets are in our Solar System?",
            answer: "Eight",
            possibleAnswers: [
                "Nine",
                "Seven",
                "Eight",
                "Ten"],
            flags: [false, false, true, false]
        },
        {
            question: "What is the powerhouse of the cell?",
            answer: "Mitochondria",
            possibleAnswers: [
                "Ribosome",
                "Redbull",
                "Mitochondria",
                "Nucleus"],
            flags: [false, false, true, false]
        },
        {
            question: "What is the standard SI unit for temperature?",
            answer: "Kelvin",
            possibleAnswers: [
                "Kelvin",
                "Fahrenheit",
                "Celsius",
                "Rankine"],
            flags: [true, false, false, false]
        },
        {
            question: "What is the chemical makeup of water?",
            answer: "H20",
            possibleAnswers: [
                "C12H6O2",
                "CO2",
                "H",
                "H20"],
            flags: [false, false, false, true]
        },
        {
            question: "Who is the chemical element Curium named after?",
            answer: "Marie &amp; Pierre Curie",
            possibleAnswers: [
                "The Curiosity Rover",
                "Marie &amp; Pierre Curie",
                "Curious George",
                "Stephen Curry"],
            flags: [false, true, false, false]
        },
        {
            question: "The asteroid belt is located between which two planets?",
            answer: "Mars and Jupiter",
            possibleAnswers: [
                "Jupiter and Saturn",
                "Mercury and Venus",
                "Earth and Mars",
                "Mars and Jupiter"],
            flags: [false, false, false, true]
        },
        {
            question: "What animal takes part in Schr&ouml;dinger&#039;s most famous thought experiment?",
            answer: "Cat",
            possibleAnswers: [
                "Dog",
                "Bat",
                "Cat",
                "Butterfly"],
            flags: [false, false, true, false],
        },
        {
                question: "How many chromosomes are in your body cells?",
                answer: "23",
                possibleAnswers: [
                    "21",
                    "22",
                    "23",
                    "24"],
                flags: [false, false, true, false]
            }
    ];
    
   // here we will write a for loop that will run on page load.
    for (var i = 0; i < questionArray.length; i++ ) {
        $("#demoQuestions").append("<h2>" + questionArray[i].question + "</h2>");

        for (var j = 0; j < questionArray[i].possibleAnswers.length; j++ ) {
            $("#demoQuestions").append("<input type='radio' name='answer' value=''>" + questionArray[i].possibleAnswers[j].possibleAnswers);

        }
    }

    var correctNum = 0;
    var incorrectNum = 0;
    var unansweredNum = 0;

    var countdownTimer = {
        time: 30,
        reset: function () {
            countdownTimer.time = 30;
            $(".timer").html("Time Remaining: " + countdownTimer.time);
        },
        start: function () {
            var counter = setInterval(countdownTimer.count, 1000);
            // for loop to iterate through questionsArray
            // at each index, create "question block" 
              //appending the p tag to the correct question div 
              //another for loop that creates each input for the potential responses (x4)
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            if (countdownTimer.time > 0) {

                countdownTimer.time--;
                $(".timer").html(countdownTimer.time);
            }
        }
    }
    
    function setup() {

        countdownTimer.start();


        $(".question").append('<button id="startButton">Start</button>');


        $("#startButton").on("click", function () {
            $(".timer").html(countdownTimer.time);
            $(".question").html("");

        });

        $("#startButton").click(countdownTimer.start);
    }
    setup();

    //$("#startButton").click(countdownTimer.start);

    function displayresults() {
    // Functions for game conditionals
        function correct() {

            correctNum++;
            correct.textContent = "Correct: " + correctNum;
            correctNum = [];
            correct.push(start.key);

            console.log(correct)
        }

        function incorrect() {

            incorrectNum++;
            incorrect.textContent = "Incorrect: " + incorrectNum;
            incorrectNum = [];
            incorrect.push(start.key);

            console.log(incorrect)
        }

        function unanswered() {

            unansweredNum--;
            unanswered.textContent = "Unanswered: " + unansweredNum;
            unansweredNum = [];

            console.log(unanswered)
        }
    }
})
