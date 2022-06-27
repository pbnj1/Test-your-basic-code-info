//Score card info...
var initialsInput = document.querySelector("#initials-text");
var scoreCardForm = document.getElementById("score-form");
var scoreCardText = document.getElementById("score-card");
var initialsList = document.getElementById("initial-list");
var scoreInfo = document.getElementsByClassName("score-info");
var viewScore = document.getElementById("view");

// var viewScore = document.createElement("button");
// viewScore.innerHTML = "View Your Scores";

var again = document.createElement("button");
again.innerHTML = "Play Again?"

viewScore.style.display = "none";
scoreCardForm.style.display ="none";
scoreCardText.style.display ="none";
initialsList.style.display ="none";
var scores = [];

// document.getElementById("score-card").style.display ="none";
// document.getElementById("score-form").style.display ="none";

//added the title
let codeTitle =document.getElementById("start-caption");
codeTitle.innerHTML = "Coding Quiz Challenge";
document.body.appendChild(codeTitle);

//added paragraph text
let codeInstr = document.getElementById("start-p");
codeInstr.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!";
document.body.appendChild(codeInstr);

//made a button below
let btn = document.createElement("button");
btn.innerHTML = "Start Quiz";
document.body.appendChild(btn);


//made score card
let scoreCard = document.createElement("h1");
scoreCard.innerHTML = "Score Card";
let scoreForm = document.createElement("form");
let scoreLabel = document.createElement("label");
// let card = document.getElementById("score-card");
// let form = document.getElementById("score-text");

// made a timer below
let timer = document.createElement("h2");

//made trial question 1
let question1 = document.createElement("h1");
question1.innerHTML = "What is your name?";

//made an ordered list with trial 1 answers 
let list1 = document.createElement("ol")
let ans1 = document.createElement("li")
let ans2 = document.createElement("li")
let ans3 = document.createElement("li")


ans1.innerHTML = "priya"
ans2.innerHTML = "zelda"
ans3.innerHTML = "amanda"


//made trial question 2
let question2 = document.createElement("h1");
question2.innerHTML = "What is your pets name?";

//made an ordered list with trial answers 
let list2 = document.createElement("ol")
let ans1_2 = document.createElement("li")
let ans2_2= document.createElement("li")
let ans3_2= document.createElement("li")

ans1_2.innerHTML = "mooncake"
ans2_2.innerHTML = "francis"
ans3_2.innerHTML = "ruby"


//made trial question 3
let question3 = document.createElement("h1");
question3.innerHTML = "What is your favorite food?";


//made an ordered list with trial answers 
let list3 = document.createElement("ol");
let ans1_3 = document.createElement("li");
let ans2_3 = document.createElement("li");
let ans3_3 = document.createElement("li");

ans1_3.innerHTML = "pizza";
ans2_3.innerHTML = "PBNJ";
ans3_3.innerHTML = "broccoli raab";



//made a statement giving the score and the users initials
let scoreTally = document.createElement("h1");
// let scoreRecord = document.createElement("h1");
// scoreRecord.textContent="dd";
//made an event for the button click
btn.addEventListener("click", function(){
//makes the title screen dissapear
    codeTitle.style.display = "none";
    codeInstr.style.display = "none";
    btn.style.display = "none";
    document.body.appendChild(timer);
    // document.body.appendChild(scoreRecord);
//pulls up the question and answers
    //starting to work on counter function

    var counter = 30;
    
    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
           
            counter--;
         
          timer.innerHTML = "You have " + counter + " seconds left";
          
      
          if(counter <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            lostMsg();

          }else if(ans3_3.addEventListener("click",function(){
            
            question3.style.display="none";
            ans1_3.style.display = "none";
            ans2_3.style.display = "none";
            ans3_3.style.display = "none";
            timer.style.display = "none";
            clearInterval(timerInterval);  

            
        })){}
      
        }, 1000);
      
    }
            function lostMsg() {
            alert("you have lost the game");
            document.body.style.display ="none"
                  
        }
       
             
              setTime();
                document.body.appendChild(question1);
                document.body.appendChild(list1);
                document.body.appendChild(ans1);
                document.body.appendChild(ans2);
                document.body.appendChild(ans3);

       
//applies an if/else to the answerss
        if (ans1.addEventListener("click", function(){
            alert("You answered correctly");
            question1.style.display ="none";
            ans1.style.display = "none";
            ans2.style.display = "none";
            ans3.style.display = "none";
            document.body.appendChild(question2);
            document.body.appendChild(list2);
            document.body.appendChild(ans1_2);
            document.body.appendChild(ans2_2);
            document.body.appendChild(ans3_2);

                if(ans2_2.addEventListener("click",function(){
                    alert("You answered correctly");
                    question2.style.display="none";
                    ans1_2.style.display = "none";
                    ans2_2.style.display = "none";
                    ans3_2.style.display = "none";
                    document.body.appendChild(question3);
                    document.body.appendChild(list3);
                    document.body.appendChild(ans1_3);
                    document.body.appendChild(ans2_3);
                    document.body.appendChild(ans3_3);
                })){}
                        
                    if(ans3_3.addEventListener("click",function(){
                    // alert("You have completed the quiz!");
                    var score = counter;
                    alert("you have finished the game with " + score + "seconds left!");
                    document.getElementById("score-card").style.display ="block";
                    document.getElementById("score-form").style.display ="block";
                    document.getElementById("view").style.display ="block";
                    // document.body.appendChild(viewScore);
                    document.body.appendChild(again);

                    // function renderScores(){
                        
                    // }
                    
                    function init(){

                        var storedScores = JSON.parse(localStorage.getItem("scores"));
                    
                        if (storedScores !== null){
                            scores = storedScores;
                        }
                        
                        renderScores();
                    }



                    function storeScore(){
                       
                        localStorage.setItem("scores", JSON.stringify(scores));
                        }
                      
                            scoreCardForm.addEventListener("submit", function(event){
                            event.preventDefault();
                       
                            var scoreText = initialsInput.value.trim();
                        
                            if(scoreText === ""){
                            return;
                            }
                       
                            scores.push(scoreText);
                            initialsInput.value = "";
                       
                        
                            storeScore();
                       
                            renderScores();
                      });
                      


                    viewScore.addEventListener("click", function(event){
                        var scoreslist = JSON.parse(localStorage.getItem("scores"));
                        initialsList.style.display ="block";
                        document.getElementById("score-card").style.display ="none";
                        document.getElementById("score-form").style.display ="none";
                        document.querySelector(".score-info").innerHTML = scoreslist + " with " + counter + " seconds remaining.";
                        document.getElementById("view").style.display ="none"
                    })
                    again.addEventListener("click", function(event){
                        location.reload();
                    })

            

                    // document.body.appendChild(scoreCard);
                    // document.body.appendChild(scoreForm);
                    // document.body.scoreForm.appendChild(scoreLabel);

                    // let scoreForm = document.createElement("form");
                    // let scoreLabel = document.createElement("label")

                    
                        // function finalScore(){
                            
                        //     var lastScore ={
                        //         scoreRecord: scoreRecord.value,
                        //         score: score.value
                        //     };
                            
                        //     localStorage.setItem("lastScore", JSON.stringify(lastScore));

                        // }

                        // function renderScore(){

                        //     var retrieveGrade = JSON.parse(localStorage.getItem("lastScore"));

                        //     if(lastScore !== null){

                        //     }
                        // }





                    // alert("you have finished the game with " + score + "seconds left!");
                    //     var saveScore = prompt("type your initials");
                    //     scoreTally.innerHTML = saveScore + " 's new score is " + score;
                    //     document.body.appendChild(scoreTally);
                       
                     })){}
                    
        }))

            {} else if (ans2.addEventListener("click", function(){
                counter = counter -5; 
                alert("You answered Incorrectly. Time will be deducted by 5 seconds")
                }))
                {}else if(ans3.addEventListener("click", function(){
                    counter = counter -5; 
                    alert("You answered Incorrectly. Time will be deducted by 5 seconds")
                }))
                    {}else if(ans1_2.addEventListener("click", function(){
                        counter = counter -5; 
                         alert("You answered Incorrectly. Time will be deducted by 5 seconds")
                         }))
                        {}else if(ans3_2.addEventListener("click", function(){
                            counter = counter -5; 
                            alert("You answered Incorrectly. Time will be deducted by 5 seconds")
                        }))
                            {}else if(ans1_3.addEventListener("click", function(){
                                counter = counter -5; 
                                alert("You answered Incorrectly. Time will be deducted by 5 seconds")
                            }))
                                {}else (ans2_3.addEventListener("click", function(){
                                    counter = counter -5; 
                                    alert("You answered Incorrectly. Time will be deducted by 5 seconds")
                                }))
})


init();
