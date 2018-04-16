$(document).ready(function() {
    // Variables
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
    // Variable showImage will hold the setInterval when we start the slideshow
    var showImage;
    // Count will keep track of the index of the currently displaying slideshow picture
    var imageCount = 0;
    // game timer
    var number = 0;
    //  Variable that will hold our interval ID when we execute the timer "run" function
    var intervalId = "";
    // Track which question is being displayed
    var currentQuestion = 1;
    // Store answer selected by player
    var questionsRemaining = 0;
    var answer = "";
    // Count of correct answers
    var correctAnswers = 0;
    // Count of incorrect answers
    var incorrectAnswers = 0;
    // hide questions, answers and slideshow until game starts
    $("#imageHolder").hide();
    $("#answers").hide();
    $("#subContainer").hide();

    // trivia questions
    var questionsObject = {
      q1:   {
        question: "The Fantastic Four have their headquarters where?",
        answers: [
          "Stark Tower",
          "Fantastic Labs", 
          "Baxter Building", 
          "Xavier Institute"
        ],
        correctAnswer: "a2"
      },

      q2:   {
        question: "Where does Peter Parker work as a photographer?",
        answers: [
          "Daily Planet",
          "Daily Bugle", 
          "NY Times", 
          "Rolling Stone"
        ],
        correctAnswer: "a1"
      },
  
      q3:   {
        question: "What are the names of Thor's war goats?",
        answers: [
          "Balder and Hermod",
          "Thunder and Lightning", 
          "Ask and Embla", 
          "Toothgrinder and Toothgnasher"
        ],
        correctAnswer: "a3"
      },
  
      q4:   {
        question: "The vampire hunter Blade is a ?",
        answers: [
          "Mutant",
          "Human", 
          "Vampire", 
          "Half Vampire"
        ],
        correctAnswer: "a3"
      },
  
      q5:   {
        question: "Dr. Doom went to the same college as?",
        answers: [
          "Tony Stark",
          "Peter Parker", 
          "Reed Richards", 
          "Bruce Banner"
        ],
        correctAnswer: "a2"
      },
  
      q6:   {
        question: "Who was not a member of the Howling Commandos?",
        answers: [
          "Jasper Sitwell",
          "Nick Fury", 
          "Dum Dum Dugan", 
          "Sam Sawyer"
        ],
        correctAnswer: "a0"
      },
  
      q7:   {
        question: "Who is romantically interested in Sue Storm?",
        answers: [
          "Iron Man",
          "Namor", 
          "Spider Man", 
          "Black Panther"
        ],
        correctAnswer: "a1"
      },
  
      q8:   {
        question: "What was Wolverine's name when he was a Horseman of the Apocalypse?",
        answers: [
          "Rage",
          "Death", 
          "Destruction", 
          "Oblivion"
        ],
        correctAnswer: "a1"
      },
  
      q9:   {
        question: "The Vision is an android created by?",
        answers: [
          "Reed Richards",
          "Tony Stark", 
          "Ultron", 
          "Dr. Doom"
        ],
        correctAnswer: "a2"
      },
  
      q10:   {
        question: "Fin Fang Foom is an alien from?",
        answers: [
          "Krypton",
          "Maklu IV", 
          "Mars", 
          "Vulcan"
        ],
        correctAnswer: "a1"
      },
  
      q11:   {
        question: "The Thing has how many fingers on both hands?",
        answers: [
          "8",
          "6", 
          "10", 
          "4"
        ],
        correctAnswer: "a0"
      },
  
      q12:   {
        question: "Silver Surfer's surfboard is composed of?",
        answers: [
          "Adamantium",
          "Silver", 
          "The same material as his body", 
          "Ice"
        ],
        correctAnswer: "a2"
      },
  
      q13:   {
        question: "Nick Fury has a brother who became the villian?",
        answers: [
          "Venom",
          "Viper", 
          "Red Shull", 
          "Scorpio"
        ],
        correctAnswer: "a3"
      },
  
      q14:   {
        question: "The Sanctum Sanctorum is the home of?",
        answers: [
          "Enchantress",
          "Thor", 
          "Dr. Strange", 
          "Odin"
        ],
        correctAnswer: "a2"
      },
  
      q15:   {
        question: "What villian was resurrected by using a cloned body of Captain America?",
        answers: [
          "Red Guardian",
          "Red Skull", 
          "Red Ghost", 
          "Red Hulk"
        ],
        correctAnswer: "a1"
      },
  
      q16:   {
        question: "Nightcrawler's real name is?",
        answers: [
          "Henry McCoy",
          "Kurt Wagner", 
          "Michael Night", 
          "Piotr Rasputin"
        ],
        correctAnswer: "a1"
      },
  
      q17:   {
        question: "Where does Arcade trap his victims?",
        answers: [
          "Magicworld",
          "Wonderworld", 
          "Murderworld", 
          "A casino"
        ],
        correctAnswer: "a2"
      },
  
      q18:   {
        question: "The Sanctum Sanctorum is located at?",
        answers: [
          "188b Wall Street",
          "177a Bleecker Street", 
          "A mountain in Asgard", 
          "Another planet"
        ],
        correctAnswer: "a1"
      },
  
      q19:   {
        question: "Who is Nightcrawler's mother?",
        answers: [
          "Storm",
          "Jean Grey", 
          "Polaris", 
          "Mystique"
        ],
        correctAnswer: "a3"
      },

      q20:   {
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

    console.log("showImage " + showImage);
    console.log("imageCount " + imageCount);
    console.log("currentQuestion " + currentQuestion);
    console.log("answer " + answer);
    console.log("correctAnswers" + correctAnswers);
    console.log("IncorrectAnswers" + incorrectAnswers);

    // Functions
    //====================================================================================
    function startGame()  {
      //display first question
      $("#imageHolder").show();
      $("#answers").show();
      $("#subContainer").show();
      //$("#question").html(questionsObject.q1.question);
      $("#question").text(questionsObject.q1.question);

      //display answers
      for (i = 0; i < questionsObject.q1.answers.length; i++) {
          //$("#answer" + i).html(questionsObject.q1.answers[i]);
          $("#answer" + i).text(questionsObject.q1.answers[i]);
      }
      // display timer
      $("#showTimer").html("<h1>Seconds Remaining: </h1>");
      //start timer
      setTimeout(runTimer, 1000);
    }

    // get player answer
        $(".answer").on("click", function() {
          answer = $(this).val();
          if (answer === questionsObject["q" + currentQuestion].correctAnswer) {
            correctAnswers++;
            //$("#numberCorrect").html(" " + correctAnswers);
            $("#numberCorrect").text(" " + correctAnswers);
          } 
          else{
            incorrectAnswers++
            //$("#numberIncorrect").html(" " + incorrectAnswers);
            $("#numberIncorrect").text(" " + incorrectAnswers);
          }

         //$("#questionsRemaining").text(questionsRemaining = 20 - (correctAnswers + incorrectAnswers));
         stopTimer(); 
         setTimeout(clearRadio, 1000);
          setTimeout(nextQuestion, 1200);
        })

    function clearRadio() {      
      var ele = document.getElementsByName("question");
      for(var i=0;i<ele.length;i++) {
        ele[i].checked = false;
      }
    }

    function timeExpired()  {
      incorrectAnswers++;
      $("#numberIncorrect").text(" " + incorrectAnswers);
      setTimeout(clearRadio, 1000);
      setTimeout(nextQuestion, 1200);
    }

    function nextQuestion() {
      // update question tracker
      currentQuestion++;
      // determine if quiz has been completed
      if (number === 0 && currentQuestion <= 5) {
          // identify next question in the questions object
          var nextQuestion = (questionsObject["q" + currentQuestion].question);
          // display next question
          //$("#question").html(nextQuestion);
          $("#question").text(nextQuestion);
          // display answers
          for (i = 0; i < 4; i++) {
          $("#answer" + i).text(questionsObject["q" + currentQuestion].answers[i]);
          }
          // restart timer
          setTimeout(runTimer, 1000);
      } else if (number !== 0 && currentQuestion <= 5) {
        // identify next question in the questions object
        var nextQuestion = (questionsObject["q" + currentQuestion].question);
        // display next question
        //$("#question").html(nextQuestion);
        $("#question").text(nextQuestion);
        // display answers
        for (i = 0; i < 4; i++) {
            $("#answer" + i).text(questionsObject["q" + currentQuestion].answers[i]);
        }
        setTimeout(runTimer, 1000);
      } else if (currentQuestion === 5) {
          //wait 2 seconds then  call function
          //setTimeout(endGame, 5000);
          //setTimeout(playAgain, 5200);
          setTimeout(playAgain, 2000);

      }
    }

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
        /*//gameOver = false;
        $("#number-to-guess").text("");
        //set total score to 0 and clear total score from display
        totalScore = 0;
        $("#total-score").text("");
        //clear game status from display
        $("#game-status").text("");
        //call function to select target number
        targetNum();
        //call function to assign crystal values and present images
        crystalvalues();*/
      } else {
        //close window
        closeWindow();
      }
      /* Firefox workaround*/
      function closeWindow() {
          window.open('','_parent','');
          window.close();
      }
    }
   
    //===================================================================
    // game timer
    // Set our number counter to 120 (2 minutes)
    //var number = 120;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    //var intervalId;

    //  When the start button gets clicked, execute the run function.
    /*$("#startBtn").on("click", function() {
      startGame();
      run();
      startSlideshow();
    });*/

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function runTimer() {
      number = 15;
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      $("#showTimer").html("<h1>Seconds Remaining: " + number + "</h1>");
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stopTimer();
        timeExpired();
        //  Alert the user that time is up.
        //setTimeout(alert("Times Up!"), 2000);
      }
    }

    //  The stop function
    function stopTimer() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //===================================================================================
    // slideshow 

    // This function will replace display whatever image it's given
    // in the 'src' attribute of the img tag.
    function displayImage() {
      $("#imageHolder").html("<img class=dynamicImage src=" + images[imageCount] + ">");
    }

    function nextImage() {
      //  TODO: Increment the count by 1.
      imageCount++;

      // TODO: Show the loading gif in the "image-holder" div.
      $("#imageHolder").html("<img src='./assets/images/loading.gif' height= '300px' width='200px'/>");

      // TODO: Use a setTimeout to run displayImage after 1 second.
      setTimeout(displayImage, 1000);

      // TODO: If the count is the same as the length of the image array, reset the count to 0.
      if (imageCount === images.length) {
        imageCount = 0;
      }
    }

    function startSlideshow() {

      // TODO: Use showImage to hold the setInterval to run nextImage.
      showImage = setInterval(nextImage, 3000);
    }

    function stopSlideshow() {

      // TODO: Put our clearInterval here:
      clearInterval(showImage);
    }


    // This will run the display image function as soon as the page loads.
    displayImage();

    //=======================================================================================================
    // click events
    $("#startBtn").on("click", function() {
      startGame();
      //setTimeout(runTimer, 2000);
      //startSlideshow();
    });


});  