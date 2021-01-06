// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// This allows for user input

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this 

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
    // Place fight function code block here . . .
    // Alert players that they are starting the round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    // If player choses to "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // Subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
    } 
}
    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable.
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked. 
    console.log(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.');

    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
        // Award player money for winning
        playerMoney = playerMoney + 20;
        // Leave while() loop since enemy is dead
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }


    // Add shop function

    // Ask player if they would like to refill health, upgrade attack, or leave shop


}
}
// Function to start game
var startGame = function() {
        // Reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;
// Fight function statements
for(var i = 0; i < enemyNames.length; i++) {   
 
    // let player know what round they are in, remember that arrays start at 
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
    // Pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    // Reset enemyHealth before starting new fight
    enemyHealth = 50;
    // Use debugger to pause script from running and check what's going on at the moment in the code
    // debugger;
    // Pass the pickedEnemyName variable's valule into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game over!");
        break;
    }
}
    // After the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
    // Play again
    startGame();

};

// Function to end the entire game
var endGame = function() {
    // If player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

// Ask player ig they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    // Restart the game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};
// Start the game when the page loads
startGame();