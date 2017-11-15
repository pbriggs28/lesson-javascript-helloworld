var robotOneName = "The Hummingbird";
var robotTwoName = "The Dodo";
var robotOneScore = 300;
var robotTwoScore = 500;

console.log(robotOneName + " score: " + robotOneScore);
console.log(robotTwoName + " score: " + robotTwoScore);

if(robotOneScore > robotTwoScore) {
	console.log("Robot one won!");
} else if(robotTwoScore > robotOneScore) {
	console.log("Robot two won!");
} else if(robotOneScore == robotTwoScore) {
	console.log("It was a tie!");
}