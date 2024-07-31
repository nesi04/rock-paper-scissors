const choices=["rock","paper","scissors"];
const compDisplay=document.getElementById("p2");
const playerDisplay=document.getElementById("p1");
const result=document.getElementById("p3");
const score = document.getElementById("p4");
result.textContent="";
let playerScore=0;
let compScore=0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    if(playerChoice===computerChoice){
        result.textContent="It's a draw";
    }
    else{
        switch (playerChoice) {
            case "rock":
                result.textContent=(computerChoice==="scissors")?"You won":"You Lost";
                break;
        
            case "paper":
                result.textContent=(computerChoice==="rock")?"You won":"You Lost";
                break;
            case "scissors":
                result.textContent=(computerChoice==="paper")?"You won":"You Lost";
                break;
                    
        }

    }
    result.classList.remove("green","red","blue");

 switch(result.textContent){
    case "You won":
        result.classList.add("green");
        playerScore+=1;
        break;
    case "You Lost":
       result.classList.add("red");
       compScore+=1;
       break; 
    case "It's a draw":
        result.classList.add("blue");   
        break; 
 }
  playerDisplay.textContent=`You Chose : ${playerChoice}`;
 compDisplay.textContent=`Computer Chose : ${computerChoice}`
 document.getElementById("p5").classList.add("yellow");
 document.getElementById("p5").textContent=`${playerScore}-${compScore}`;

 
    
}