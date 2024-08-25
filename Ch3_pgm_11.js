var player1;
var player2;
player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;
player1.score = player1.score +100/10;
console.log(player1.name + " has scored " + player1.score);
player2 = {
    name: "Maxwell",
    score: 0
};


player2.score = player2.score + 50;
total=player1.score+player2.score
console.log(player1.name+" and " +player2.name + " has scored " + total);