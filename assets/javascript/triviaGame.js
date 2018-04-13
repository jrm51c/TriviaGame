$(document).ready(function() {

    
      // create variables
    //=============================================================================================

    // slideshow image links
    var images = ["./assets/images/galaxy1.jpg", "./assets/images/galaxy2.jpg", "./assets/images/galaxy3.jpg"];

    // Variable showImage will hold the setInterval when we start the slideshow
    var showImage;

    // Count will keep track of the index of the currently displaying slideshow picture
    var imageCount = 0;
    var currentQuestion = 10;
    var answer = "";
    var correctAnswers = 0;
    var incorrectAnswers = 0;

    var q1 =   {
        question: "The Fantastic Four have their headquarters in which building?",
        answers: [
          "Stark Tower",
          "Fantastic Labs", 
          "Baxter Building", 
          "Xavier Institute"
        ],
        correctAnswer: "a2"
    };

    var q2 =   {
      question: "Where does Peter Parker work as a photographer?",
      answers: [
        "Daily Planet",
        "Daily Bugle", 
        "NY Times", 
        "Rolling Stone"
      ],
      correctAnswer: "a1"
    };

    var q3 =   {
      question: "What are the names of Thor's war goats?",
      answers: [
        "Balder and Hermod",
        "Thunder and Lightning", 
        "Ask and Embla", 
        "Toothgrinder and Toothgnasher"
      ],
      correctAnswer: "a3"
    };

    var q4 =   {
      question: "The vampire hunter Blade is a ?",
      answers: [
        "Mutant",
        "Human", 
        "Vampire", 
        "Half Vampire"
      ],
      correctAnswer: "a3"
    };

    var q5 =   {
      question: "Dr.Doom went to the same college as?",
      answers: [
        "Tony Stark",
        "Peter Parker", 
        "Reed Richards", 
        "Bruce Banner"
      ],
      correctAnswer: "a2"
    };

    var q6 =   {
      question: "Who here was not a member of the Howling Commandos?",
      answers: [
        "Jasper Sitwell",
        "Nick Fury", 
        "Dum Dum Dugan", 
        "Sam Sawyer"
      ],
      correctAnswer: "a0"
    };

    var q7 =   {
      question: "Which Super Hero is romantically interested in Sue Storm?",
      answers: [
        "Iron Man",
        "Namor", 
        "Spider Man", 
        "Black Panther"
      ],
      correctAnswer: "a1"
    };

    var q8 =   {
      question: "What was Wolverine's name when he was a Horsemn of the Apocalypse?",
      answers: [
        "Rage",
        "Death", 
        "Destruction", 
        "Oblivion"
      ],
      correctAnswer: "a1"
    };

    var q9 =   {
      question: "The Vision is an android created by?",
      answers: [
        "Reed Richards",
        "Tony Stark", 
        "Ultron", 
        "Dr. Doom"
      ],
      correctAnswer: "a2"
    };

    var q10 =   {
      question: "Fin Fang Foom is an alien from?",
      answers: [
        "Krypton",
        "Maklu IV", 
        "Mars", 
        "Vulcan"
      ],
      correctAnswer: "a1"
    };

    var q11 =   {
      question: "The Thing has how many fingers on both hands, including his thumbs?",
      answers: [
        "8",
        "6", 
        "10", 
        "4"
      ],
      correctAnswer: "a0"
    };

    var q12 =   {
      question: "Silver Surfer's surfboard is composed of?",
      answers: [
        "Adamantium",
        "Silver", 
        "The same material as his body", 
        "Ice"
      ],
      correctAnswer: "a2"
    };

    var q13 =   {
      question: "Nick Fury has a brother who became the villian?",
      answers: [
        "Venom",
        "Viper", 
        "Red Shull", 
        "Scorpio"
      ],
      correctAnswer: "a3"
    };

    var q14 =   {
      question: "The Sanctum Sanctorum is the home of?",
      answers: [
        "Enchantress",
        "Thor", 
        "Dr. Strange", 
        "Odin"
      ],
      correctAnswer: "a2"
    };

    var q15 =   {
      question: "What villian was resurrected by using a cloned body of Captain America?",
      answers: [
        "Red Guardian",
        "Red Skull", 
        "Red Ghost", 
        "Red Hulk"
      ],
      correctAnswer: "a1"
    };

    var q16 =   {
      question: "Nightcrawler's real name is?",
      answers: [
        "Henry McCoy",
        "Kurt Wagner", 
        "Michael Night", 
        "Piotr Rasputin"
      ],
      correctAnswer: "a1"
    };

    var q17 =   {
      question: "Where does Arcade trap his victims?",
      answers: [
        "Magicworld",
        "Wonderworld", 
        "Murderworld", 
        "A casino"
      ],
      correctAnswer: "a2"
    };

    var q18 =   {
      question: "The Sanctum Sanctorum is located at?",
      answers: [
        "188b Wall Street",
        "177a Bleecker Street", 
        "A mountain in Asgard", 
        "Another planet"
      ],
      correctAnswer: "a1"
    };

    var q19 =   {
      question: "Who is Nightcrawler's mother?",
      answers: [
        "Storm",
        "Jean Grey", 
        "Polaris", 
        "Mystique"
      ],
      correctAnswer: "a3"
    };

    var q20 =   {
      question: "Before he became the Thing, Ben Grimm was?",
      answers: [
        "Leader of the Yancy Street Gang",
        "Leader of a crime syndicate", 
        "A Professor", 
        "A Policeman"
      ],
      correctAnswer: "a0"
    };

    console.log("current " + currentQuestion);
    console.log("q" + currentQuestion);
    function nextQuestion() {
      var nextQuestion = ("q" + currentQuestion + "." + "question");
      console.log("nq " + nextQuestion);
      $("#question").html(nextQuestion);
    }

    // get player answer
    $(".answer").on("click", function() {
      answer = $(this).val();
      if (answer === 1) {
        correctAnswers++;
      } 
      else{
        incorrectAnswers++
      }
      //wait 3 seconds then  call function
      //to display next question
     // setTimeout(nextQuestion, 3000);
      console.log(answer);
      console.log(correctAnswers);
      console.log(incorrectAnswers);
    })

   //$("#answer0").text(q1.answers[0]);
   //$("#answer1").text(q1.answers[1]);
   //$("#answer2").text(q1.answers[2]);
   //$("#answer3").text(q1.answers[3]);
   //for (i=0; i<q20.answers.length; i++) {
   // $("#answer" + i).text(q20.answers[i]);
   // console.log("#answer" + i);
    //console.log(q20.answers[i]);
   //}
   
   //$("#question").text(q1.question);
  
    //  Set our number counter to 100.
    var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the start button gets clicked, execute the run function.
    $("#startBtn").on("click", run);
    $("#startBtn").click(startSlideshow);

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      $("#showTimer").html("<h2>Time Remaining: " + number + " seconds</h2>");
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
      run();

    // This function will replace display whatever image it's given
    // in the 'src' attribute of the img tag.
    function displayImage() {
      $("#imageHolder").html("<img src=" + images[imageCount] + " width='400px'>");
    }

    function nextImage() {
      //  TODO: Increment the count by 1.
      imageCount++;

      // TODO: Show the loading gif in the "image-holder" div.
      $("#imageHolder").html("<img src='./assets/images/loading.gif' width='200px'/>");

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

    nextQuestion();

});  