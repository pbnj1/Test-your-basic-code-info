document.body.setAttribute("style", "background: #47B5FF")

var initialsInput = document.querySelector("#initials-text");
var scoreCardForm = document.getElementById("score-form");
var scoreCardText = document.getElementById("score-card");
var initialsList = document.getElementById("initial-list");
var scoreInfo = document.getElementsByClassName("score-info");

var yourLastScore = document.createElement("button");
yourLastScore.innerHTML = "Your Last Score"

var again = document.createElement("button");
again.innerHTML = "Play Again?"
again.setAttribute("style", " height:50px; width:100px; font-size: 17px; border-radius: 20px; background: #DFF6FF")
yourLastScore.setAttribute("style", " margin-left: 20px;height:50px; width:100px; font-size: 17px; border-radius: 20px; background: #DFF6FF")

scoreCardForm.style.display ="none";
scoreCardText.style.display ="none";
initialsList.style.display ="none";
var scores = [];



let codeTitle =document.getElementById("start-caption");
codeTitle.innerHTML = "Coding Quiz Challenge";


let codeInstr = document.getElementById("start-p");
codeInstr.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by five seconds!";
codeInstr.style.paddingLeft = "100px";


let btn = document.createElement("button");
btn.innerHTML = "Start Quiz";
btn.setAttribute("style", " height:50px; width:100px; font-size: 17px; border-radius: 20px; background: #DFF6FF")


let titleBox = document.createElement("div");
document.body.appendChild(titleBox);
titleBox.setAttribute("class", "box")
titleBox.setAttribute("style", "display: flex; flex-wrap: wrap; flex-direction: column; justify-content: center; align-items: center; position:relative")

titleBox.appendChild(codeTitle);
titleBox.appendChild(codeInstr);
titleBox.appendChild(btn);


let scoreCard = document.createElement("h1");
scoreCard.innerHTML = "Score Card";
let scoreForm = document.createElement("form");
let scoreLabel = document.createElement("label");


let timer = document.createElement("h2");

let question1 = document.createElement("h1");
question1.innerHTML = "What is Javascript?";


let list1 = document.createElement("ol")
let ans1 = document.createElement("li")
let ans2 = document.createElement("li")
let ans3 = document.createElement("li")


ans1.innerHTML = "A programming language"
ans2.innerHTML = "The recipe for coffee"
ans3.innerHTML = "The way you plan vacation stops"

ans1.setAttribute("style", "margin: 20px; padding: 10px; font-size: 1.5rem; list-style: none; border: solid; border-width: 1px; border-radius: 20px; background: #DFF6FF")
ans2.setAttribute("style", "margin: 20px; padding: 10px; font-size: 1.5rem; list-style: none; border: solid; border-width: 1px; border-radius: 20px; background: #DFF6FF")
ans3.setAttribute("style", "margin: 20px; padding: 10px; font-size: 1.5rem; list-style: none; border: solid; border-width: 1px; border-radius: 20px; background: #DFF6FF")

let QaBox1 = document.createElement("div");
QaBox1.setAttribute("class", "Qabox")
QaBox1.setAttribute("style", "display: flex; flex-wrap: wrap; flex-direction: column; justify-content: center; align-items: center;")


let question2 = document.createElement("h1");
question2.innerHTML = "What is HTML?";


let list2 = document.createElement("ol")
let ans1_2 = document.createElement("li")
let ans2_2= document.createElement("li")
let ans3_2= document.createElement("li")

ans1_2.innerHTML = "A random assortment of letters"
ans2_2.innerHTML = "The framework to construct web applications"
ans3_2.innerHTML = "High Training Men's League"

ans1_2.setAttribute("style", "margin: 20px; padding: 10px; font-size: 1.5rem; list-style: none; border: solid; border-width: 1px; border-radius: 20px; background: #DFF6FF")
ans2_2.setAttribute("style", "margin: 20px; padding: 10px; font-size: 1.5rem; list-style: none; border: solid; border-width: 1px; border-radius: 20px; background: #DFF6FF")
ans3_2.setAttribute("style", "margin: 20px; padding: 10px; font-size: 1.5rem; list-style: none; border: solid; border-width: 1px; border-radius: 20px; background: #DFF6FF")

let QaBox2 = document.createElement("div");
QaBox2.setAttribute("class", "Qabox2")
QaBox2.setAttribute("style", "display: flex; flex-wrap: wrap; flex-direction: column; justify-content: center; align-items: center;")


let question3 = document.createElement("h1");
question3.innerHTML = "What is CSS?";


let list3 = document.createElement("ol");
let ans1_3 = document.createElement("li");
let ans2_3 = document.createElement("li");
let ans3_3 = document.createElement("li");

ans1_3.innerHTML = "Custom Selected Showers";
ans2_3.innerHTML = "A spin off of the show CSI";
ans3_3.innerHTML = "A rule based language used to style HTML coding  ";

ans1_3.setAttribute("style", "margin: 20px; padding: 10px; font-size: 1.5rem; list-style: none; border: solid; border-width: 1px; border-radius: 20px; background: #DFF6FF")
ans2_3.setAttribute("style", "margin: 20px; padding: 10px; font-size: 1.5rem; list-style: none; border: solid; border-width: 1px; border-radius: 20px; background: #DFF6FF")
ans3_3.setAttribute("style", "margin: 20px; padding: 10px; font-size: 1.5rem; list-style: none; border: solid; border-width: 1px; border-radius: 20px; background: #DFF6FF")

let QaBox3 = document.createElement("div");
QaBox3.setAttribute("class", "Qabox3")
QaBox3.setAttribute("style", "display: flex; flex-wrap: wrap; flex-direction: column; justify-content: center; align-items: center;")

let scoreTally = document.createElement("h1");


btn.addEventListener("click", function(){

    titleBox.style.display = "none";

    btn.style.display = "none";
    document.body.appendChild(timer);
 

    var counter = 30;
    
    function setTime() {
       
        var timerInterval = setInterval(function() {
           
            counter--;
         
          timer.innerHTML = "You have " + counter + " seconds left";
          
      
          if(counter <= 0) {
         
            clearInterval(timerInterval);
          
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
                
                document.body.appendChild(QaBox1);
               
                QaBox1.appendChild(question1);
                QaBox1.appendChild(list1);
                QaBox1.appendChild(ans1);
                QaBox1.appendChild(ans2);
                QaBox1.appendChild(ans3);

       

        if (ans1.addEventListener("click", function(){
            alert("You answered correctly");
            QaBox1.style.display ="none"
           
            document.body.appendChild(QaBox2);
            QaBox2.appendChild(question2);
            QaBox2.appendChild(list2);
            QaBox2.appendChild(ans1_2);
            QaBox2.appendChild(ans2_2);
            QaBox2.appendChild(ans3_2);

                if(ans2_2.addEventListener("click",function(){
                    alert("You answered correctly");
                    QaBox2.style.display ="none"
                
                    document.body.appendChild(QaBox3);
                    QaBox3.appendChild(question3);
                    QaBox3.appendChild(list3);
                    QaBox3.appendChild(ans1_3);
                    QaBox3.appendChild(ans2_3);
                    QaBox3.appendChild(ans3_3);
                })){}
                        
                    if(ans3_3.addEventListener("click",function(){
                  
                    var score = counter;
                    alert("you have finished the game with " + score + "seconds left!");
                    
                  

                    document.getElementById("score-card").style.display ="block";
                    document.getElementById("score-form").style.display ="block";
                    
                    document.body.appendChild(again);
                    document.body.appendChild(yourLastScore);

                
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
                      


                    yourLastScore.addEventListener("click", function(event){
                        var scoreslist = JSON.parse(localStorage.getItem("scores"));
                        initialsList.style.display ="block";
                        document.getElementById("score-card").style.display ="none";
                        document.getElementById("score-form").style.display ="none";
                        let scoreReport = document.querySelector(".score-info").innerHTML = scoreslist + " with " + counter + " seconds remaining.";
                        yourLastScore.style.display = "none";
                    })
                    again.addEventListener("click", function(event){
                        location.reload();
                    })

        


                 
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
