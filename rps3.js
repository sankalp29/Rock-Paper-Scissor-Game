var userScore=0;
var compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const sciss_div=document.getElementById("s");

function convert(letter){
	if(letter==="r")return "Rock";
	if(letter==="s")return "Scissor";
	if(letter==="p")return "Paper";
}


function win(user,comp){
	console.log("WIN!");
	userScore++;
	userScore_span.innerHTML=userScore;
	smalluser="user".fontsize(3).sub();
	smallcomp="comp".fontsize(3).sub();
	result_p.innerHTML=`${convert(user)}${smalluser} beats ${convert(comp)}${smallcomp}.You win!`;
}


function lose(user,comp){
	console.log("LOST");
	compScore++;
	compScore_span.innerHTML=compScore;
	smalluser="user".fontsize(3).sub();
	smallcomp="comp".fontsize(3).sub();
	result_p.innerHTML=`${convert(comp)}${smallcomp} beats ${convert(user)}${smalluser}.You lose`
}

function draw(user,comp){
	result_p.innerHTML=`${convert(user)}${smalluser} equals ${convert(comp)}${smallcomp}.It's a DRAW`
}


function getcompchoice(){
	const choices=['r','p','s'];
	const randomnumber=Math.floor(Math.random()*3);
	return choices[randomnumber];
}	


function game(userChoice){
	const computerchoice=getcompchoice();
	switch(userChoice+computerchoice)
	{
		case "rs":
		case "sp":
		case "pr":
			win(userChoice,computerchoice);
			break;
		
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,computerchoice);
			break;

		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerchoice);
	}
}


function main(){
	rock_div.addEventListener('click',function(){
		game("r");	
	})

	paper_div.addEventListener('click',function(){
		game("p");
	})

	sciss_div.addEventListener('click',function(){
		game("s");
	})
}

main();