//Game States
// 'WIN' -Player robot has defeated all enemy- robots
   // *Fight all enemy-robots
   // *Defeat each enemy- robot
//'Lose' - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

// END GAME INFORMATION / VARIABLES 

// RUN GAME
startGame();

