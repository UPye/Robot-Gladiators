// This allows for user input

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this 

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    console.log(promptFight);
    
    // If player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable.
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked. 
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
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
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // If player choses to skip
}   else if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }

    // If no (false), ask question again by running fight() again
    else {
        fight();
    }
}
}
// command to execute the fight.

fight();