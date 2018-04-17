$(document).ready(function() {
  // variables
  //=============================================================================================
  // slideshow image links
  var images = [
    "./assets/images/marvel1.jpg", 
    "./assets/images/marvel2.jpg", 
    "./assets/images/marvel3.jpg",
    "./assets/images/marvel4.jpg",
    "./assets/images/marvel5.jpg",
    "./assets/images/marvel6.jpg",
    "./assets/images/marvel7.jpg",
    "./assets/images/marvel8.jpg",
    "./assets/images/marvel9.jpg",
    "./assets/images/marvel10.jpg",
    "./assets/images/marvel11.jpg",
    "./assets/images/marvel12.jpg",
    "./assets/images/marvel13.jpg",
    "./assets/images/marvel14.jpg",
    "./assets/images/marvel15.jpg",
    "./assets/images/marvel16.jpg",
    "./assets/images/marvel17.jpg",
    "./assets/images/marvel18.jpg",
    "./assets/images/marvel19.jpg",
    "./assets/images/marvel20.jpg",
    "./assets/images/marvel21.jpg",
    "./assets/images/marvel22.jpg",
    "./assets/images/marvel23.jpg",
    "./assets/images/marvel24.jpg",
    "./assets/images/marvel25.jpg",
    "./assets/images/marvel26.jpg",
    "./assets/images/marvel27.jpg",
    "./assets/images/marvel28.jpg",
    "./assets/images/marvel29.jpg",
    "./assets/images/marvel30.jpg"
    ];
  // Count will keep track of the index of the currently displaying slideshow picture
  var imageCount = 0;
  // game timer
  var number = 0;
  // variable that will hold our interval ID when we execute the timer "run" function
  var intervalId;
  // track which question is being displayed
  var currentQuestion = 1;
  // store answer selected by player
  var questionsRemaining = 0;
  // store player answer
  var answer;
  // count of correct answers
  var correctAnswers = 0;
  // count of incorrect answers
  var incorrectAnswers = 0;
  // hide questions, answers and slideshow until game starts
  $("#imageHolder").hide();
  $("#answers").hide();
  $("#subContainer").hide();
  // trivia questions
  var questionsObject = {
    length: 20,

    q1: {
      question: "The Fantastic Four have their headquarters where?",
      answers: [
        "Stark Tower",
        "Fantastic Labs", 
        "Baxter Building", 
        "Xavier Institute"
      ],
      correctAnswer: "a2"
    },

    q2: {
      question: "Where does Peter Parker work as a photographer?",
      answers: [
        "Daily Planet",
        "Daily Bugle", 
        "NY Times", 
        "Rolling Stone"
      ],
      correctAnswer: "a1"
    },
  
    q3: {
      question: "What are the names of Thor's war goats?",
      answers: [
        "Balder and Hermod",
        "Thunder and Lightning", 
        "Ask and Embla", 
        "Toothgrinder and Toothgnasher"
      ],
      correctAnswer: "a3"
    },
  
    q4: {
      question: "The vampire hunter Blade is a ?",
      answers: [
        "Mutant",
        "Human", 
        "Vampire", 
        "Half Vampire"
      ],
      correctAnswer: "a3"
    },
  
    q5: {
      question: "Dr. Doom went to the same college as?",
      answers: [
        "Tony Stark",
        "Peter Parker", 
        "Reed Richards", 
        "Bruce Banner"
        ],
      correctAnswer: "a2"
    },
  
    q6: {
      question: "Who was not a member of the Howling Commandos?",
      answers: [
        "Jasper Sitwell",
        "Nick Fury", 
        "Dum Dum Dugan", 
        "Sam Sawyer"
      ],
      correctAnswer: "a0"
    },
  
    q7: {
      question: "Who is romantically interested in Sue Storm?",
      answers: [
        "Iron Man",
        "Namor", 
        "Spider Man", 
        "Black Panther"
      ],
      correctAnswer: "a1"
    },
  
    q8: {
      question: "What was Wolverine's name when he was a Horseman of the Apocalypse?",
      answers: [
        "Rage",
        "Death", 
        "Destruction", 
        "Oblivion"
      ],
      correctAnswer: "a1"
    },
  
    q9: {
      question: "The Vision is an android created by?",
      answers: [
        "Reed Richards",
        "Tony Stark", 
        "Ultron", 
        "Dr. Doom"
      ],
      correctAnswer: "a2"
    },
  
    q10: {
      question: "Fin Fang Foom is an alien from?",
      answers: [
        "Krypton",
        "Maklu IV", 
        "Mars", 
        "Vulcan"
      ],
      correctAnswer: "a1"
    },
  
    q11: {
      question: "The Thing has how many fingers on both hands?",
      answers: [
        "8",
        "6", 
        "10", 
        "4"
      ],
      correctAnswer: "a0"
    },
  
    q12: {
      question: "Silver Surfer's surfboard is composed of?",
      answers: [
        "Adamantium",
        "Silver", 
        "The same material as his body", 
        "Ice"
      ],
      correctAnswer: "a2"
    },
  
    q13: {
      question: "Nick Fury has a brother who became the villian?",
      answers: [
        "Venom",
        "Viper", 
        "Red Skull", 
        "Scorpio"
      ],
      correctAnswer: "a3"
    },
  
    q14: {
      question: "The Sanctum Sanctorum is the home of?",
      answers: [
        "Enchantress",
        "Thor", 
        "Dr. Strange", 
        "Odin"
      ],
      correctAnswer: "a2"
    },
  
    q15: {
      question: "What villian was resurrected by using a cloned body of Captain America?",
      answers: [
        "Red Guardian",
        "Red Skull", 
        "Red Ghost", 
        "Red Hulk"
      ],
      correctAnswer: "a1"
    },
  
    q16: {
      question: "Nightcrawler's real name is?",
      answers: [
        "Henry McCoy",
        "Kurt Wagner", 
        "Michael Night", 
        "Piotr Rasputin"
      ],
      correctAnswer: "a1"
    },
  
    q17: {
      question: "Where does Arcade trap his victims?",
      answers: [
        "Magicworld",
        "Wonderworld", 
        "Murderworld", 
        "A casino"
      ],
      correctAnswer: "a2"
    },
  
    q18: {
      question: "The Sanctum Sanctorum is located at?",
      answers: [
        "188b Wall Street",
        "177a Bleecker Street", 
        "A mountain in Asgard", 
        "Another planet"
      ],
      correctAnswer: "a1"
    },
  
    q19: {
      question: "Who is Nightcrawler's mother?",
      answers: [
        "Storm",
        "Jean Grey", 
        "Polaris", 
        "Mystique"
      ],
      correctAnswer: "a3"
    },

    q20: {
      question: "Before he became the Thing, Ben Grimm was?",
      answers: [
        "Leader of the Yancy Street Gang",
        "Leader of a crime syndicate", 
        "A Professor", 
        "A Policeman"
      ],
      correctAnswer: "a0"
    }

    };

    // functions
    //====================================================================================
    function startGame()  {
      // hide game header
      $(".jumbotron").hide();
      // display first question
      $("#imageHolder").show();
      $("#answers").show();
      $("#subContainer").show();
      $("#question").text(questionsObject.q1.question);
      // display answers
      for (i = 0; i < questionsObject.q1.answers.length; i++) {
          $("#answer" + i).text(questionsObject.q1.answers[i]);
      }
      // display number of questions remaining
      $("#questionsRemaining").text(" " + questionsObject.length);
      // display an image
      displayImage();
      // start timer
      setTimeout(runTimer, 1000);
    }

    // get player answer
    $(".answer").on("click", function() {
    answer = $(this).val();
      if (answer === questionsObject["q" + currentQuestion].correctAnswer) {
          correctAnswers++;
      } 
      else  {
          incorrectAnswers++
      }
      stopTimer(); 
      displayImage();
      setTimeout(clearRadio, 1000);
      setTimeout(nextQuestion, 1200);
    });

    function clearRadio() {    
      // set radio buttons back to default value (unchecked)  
      var ele = document.getElementsByName("question");
      for (var i = 0; i < ele.length; i++) {
        ele[i].checked = false;
      }
    };

    function timeExpired()  {
      incorrectAnswers++;
      setTimeout(clearRadio, 1000);
      setTimeout(nextQuestion, 1200);
      displayImage();
    };

    function nextQuestion() {
      // display number of questions remaining
      $("#questionsRemaining").text(" " + (questionsObject.length - currentQuestion));
      // display number of correct answers
       $("#numberCorrect").text(" " + correctAnswers);
      // display number of incorrect answers
       $("#numberIncorrect").text(" " + incorrectAnswers);
      // update question tracker
      currentQuestion++;
      // determine if quiz has been completed
      if (currentQuestion <= questionsObject.length) {
        // identify next question in the questions object
        var nextQuestion = (questionsObject["q" + currentQuestion].question);
        // display next question
        $("#question").text(nextQuestion);
          // display answers
          for (i = 0; i < 4; i++) {
          $("#answer" + i).text(questionsObject["q" + currentQuestion].answers[i]);
          }
          // restart timer
          setTimeout(runTimer, 500);
      } else  {
        setTimeout(playAgain, 3000);
      }
    };

    function playAgain()  {
      var confirmation = confirm("Would you like to play again?");
        if (confirmation === true) {
        $(".jumbotron").hide();
        //set current question number to 1 
        currentQuestion = 1;
        // clear answer value
        answer = "";
        // set correct answers to 0 and clear from display
        $("#numberCorrect").text("");
        correctAnswers = 0;
        // set incorrect answers to 0 and clear from display
        incorrectAnswers = 0;
        $("#numberIncorrect").text("");
        // start a new game
        startGame();
        } else {
        //close window
        closeWindow();
        }
        /* Firefox workaround*/
        function closeWindow() {
          window.open('','_parent','');
          window.close();
        }
    };
   
    //===================================================================
    // game timer
    //  The runTimer function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function runTimer() {
      number = 10;
      //  Show the number in the #show-number tag.
      $("#showTimer").html("<h1>Seconds Remaining: " + number + "</h1>");
      clearInterval(intervalId);
      setTimeout(intervalId = setInterval(decrement, 1000), 1000);
    };

    function decrement() {
      //  decrease number by one.
      number--;
      //  display number in the #show-number tag.
      $("#showTimer").html("<h1>Seconds Remaining: " + number + "</h1>");
      //  Once number hits zero...
      if (number === 0) {
        stopTimer();
        timeExpired();
      }
    };

    function stopTimer() {
      //  clear intervalId
      //  pass the name of the interval
      //  to the clearInterval function
      clearInterval(intervalId);
      // clear timer
      $("#showTimer").html("<h1>Seconds Remaining: </h1>");
    };

    //===================================================================================
    // slideshow 

    // generate a random number between 1 - 30 
    // Math.floor(Math.random() * max - min + 1)) + min
    // display image in the 'src' attribute of the img tag
    function displayImage() {
      imageCount = Math.floor(Math.random() * 30) + 1;
      $("#imageHolder").html("<img class=dynamicImage src=" + images[imageCount] + ">");
    };

    //=======================================================================================================
    // click events
    $("#startBtn").on("click", function() {
      startGame();
      displayImage();
    });

});  