let rock=document.getElementById("rock")
let paper=document.getElementById("paper")
let scissor=document.getElementById("scissor")
let computerHands=document.getElementById("comp-hands")
let userHands=document.getElementById("user-Hands")

let choices=["rock","paper","scissors"]
let userscore=0;
let compscore=0;
let userClicked;

rock.addEventListener('click',()=>{
    userClicked="rock";
    userChoice()
    computerChoiceAndAddingscore()
})

paper.addEventListener('click',()=>{
    userClicked="paper";
    userChoice()
    computerChoiceAndAddingscore()
})

scissor.addEventListener('click',()=>{
    userClicked="scissors";
    userChoice()
    computerChoiceAndAddingscore()
})

function userChoice(){
    userHands.innerHTML=`<img src='assets/${userClicked}-hand.png' alt=""> `
}

function computerChoiceAndAddingscore(){
    var randomImage=choices[Math.floor(Math.random()*3)]
    computerHands.innerHTML=`<img src='assets/${randomImage}-hand.png' alt=""> `
    if(userClicked==randomImage){
        console.log("Tie");
    }
    else  if(userClicked=="rock" && randomImage=="scissors" || userClicked=="paper" && randomImage=="rock" || userClicked=="scissors" && randomImage=="paper"){
        userscore++;
        document.getElementById("userScore").innerHTML=userscore;
    }
    else{
       compscore++;
       document.getElementById("compScore").innerHTML=compscore;
    }
    result()
}

function result(){
    if(userscore==5||compscore==5){
        document.getElementById("button").style.display="block";
        
        if(userscore>=5){
            document.getElementById("Result").innerHTML="You Won!"
        }
        else{
            document.getElementById("Result").innerHTML="Computer Won!"
        }
    }
}

let button=document.getElementById("button")
button.addEventListener('click',()=>{
    location.reload();
})

