alert ("Welcome to Rach's Vogue Trivia! Once you click 'OK' you have 1 minute to answer all 10 trivia questions! Good luck :) " )

//timer
function countDown (secs, elem) {
	var element=document.getElementById(elem);
	element.innerHTML = secs+" seconds!";
	if(secs<1) {
		clearTimeout(timer);
		element.innerHTML = '<h4>Time is up! Check your score!</h4>';
	}
	secs--;
	var timer=setTimeout('countDown('+secs+',"'+elem+'")',1000);
}

//Questions, Choices, Answers
function check(){
	console.log("hi");

var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var question4=document.quiz.question4.value;
var question5=document.quiz.question5.value;
var question6=document.quiz.question6.value;
var question7=document.quiz.question7.value;
var question8=document.quiz.question8.value;
var question9=document.quiz.question9.value;
var question10=document.quiz.question10.value;
var correct=0;
var incorrect=0;

// If/else for correct and incorrect
	if (question1 == "Anna Wintour") {
		correct++;
	} else {
		incorrect++
	}

	if (question2 == "1892") {
		correct++;
	} else {
		incorrect++
	}

	if (question3 == "Arthur Baldwin") {
		correct++;
	} else {
		incorrect++
	}

	if (question4 == "Conde Nast") {
		correct++;
	} else {
		incorrect++
	}

	if (question5 == "17 countries") {
		correct++;
	} else {
		incorrect++
	}

	if (question6 == "Zendaya") {
		correct++;
	} else {
		incorrect++
	}

	if (question7 == "British Vogue") {
		correct++;
	} else {
		incorrect++
	}

	if (question8 == "Beverly Johnson") {
		correct++;
	} else {
		incorrect++
	}

	if (question9 == "To influence American fashion and lifestyle") {
		correct++;
	} else {
		incorrect++
	}

	if (question10 == "Madonna") {
		correct++;
	} else {
		incorrect++

	}

document.getElementById("after_submit").style.visibility ="visible";
document.getElementById("number_correct").innerHTML = "You got " + correct+ " correct!" + "<br>FUN FACT: This backgroudnd is Madonna's first Vogue Cover in 1989";
document.getElementById("number_incorrect").innerHTML = "You got " + incorrect+ " incorrect.";
}

//Reset
function reset(){}
