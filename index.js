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
let list3 = document.createElement("ol")
let ans1_3 = document.createElement("li")
let ans2_3 = document.createElement("li")
let ans3_3 = document.createElement("li")

ans1_3.innerHTML = "pizza"
ans2_3.innerHTML = "PBNJ"
ans3_3.innerHTML = "broccoli raab"




//made an event for the button click
btn.addEventListener("click", function(){
//makes the title screen dissapear
codeTitle.style.display = "none";
codeInstr.style.display = "none";
btn.style.display = "none";
//pulls up the question and answers
document.body.appendChild(question1);
document.body.appendChild(list1);
document.body.appendChild(ans1);
document.body.appendChild(ans2);
document.body.appendChild(ans3);

})


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
            alert("You have completed the quiz!");
            question3.style.display="none";
            ans1_3.style.display = "none";
            ans2_3.style.display = "none";
            ans3_3.style.display = "none";
           
        })){}

}))

{} else if (ans2.addEventListener("click", function(){
    alert("You answered Incorrectly. Time will be deducted")
    }))
        {}else if(ans3.addEventListener("click", function(){
        alert("You answered Incorrectly. Time will be deducted")
        })){}else if(ans1_2.addEventListener("click", function(){
            alert("You answered Incorrectly. Time will be deducted")
            })){}else if(ans3_2.addEventListener("click", function(){
                alert("You answered Incorrectly. Time will be deducted")
                })){}else if(ans1_3.addEventListener("click", function(){
                    alert("You answered Incorrectly. Time will be deducted")
                    })){}else(ans2_3.addEventListener("click", function(){
                        alert("You answered Incorrectly. Time will be deducted")
                        }))


