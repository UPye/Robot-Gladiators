// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


// Function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// Function to set name
var getPlayerName = function() {
    var name = "";

// ***************************************
// ADD LOOP HERE WITH PROMPT AND CONDITION
// ***************************************


while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
}

console.log("Your robot's name is " + name);
return name;
};


// This allows for user input

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, 
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack +- 6;
            this.money -+ 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];


// Function to start game
var startGame = function() {
    // Reset player stats
    playerInfo.reset();
// Fight function statements
for(var i = 0; i < enemyInfo.length; i++) {   

// let player know what round they are in, remember that arrays start at 
if (playerInfo.health > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
// Pick new enemy to fight based on the index of the enemyNames array
var pickedEnemyObj = enemyInfo[i];
// Reset enemy.health before starting new fight
pickedEnemyObj.health = randomNumber(40, 60);
// Use debugger to pause script from running and check what's going on at the moment in the code
// debugger;
// Pass the pickedEnemyObj variable's valule into the fight function, where it will assume the value of the enemyName parameter
fight(pickedEnemyObj);
// Is we're not at the last enemy in the array
if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
    // Ask if player wants to use the store before next round
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    
    // If yes, take them to the store() function
    if (storeConfirm) {
        shop();
    }
}
}
else {
    window.alert("You have lost your robot in battle! Game over!");
    break;
}
};
// After the loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame();

// Play again
startGame();

};


// Function to end the entire game
var endGame = function() {
    // If player is still alive, player wins!
    if (playerInfo.health > 0) {
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
    // Shop function
    var shop = function() {
        // Ask player what they'd like to do
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, Upgrade your attack, or LEAVE the store? Please enter one: 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
        )
    shopOptionPrompt = parseInt(shopOptionPrompt);
        switch (shopOptionPrompt) {
            case 1:
                playerInfo.refillHealth();
                break;
            case 2:
                playerInfo.upgradeAttack();
                    break;
            case 3:
                window.alert("Leaving the store.");
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");
                // Call shop() again to force player to pick a valid option
                shop();
                break;
        }
};

var fightOrSkip = function() {
    // Ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    // If player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);

        // Return true if player wants to leave
        return true;
        }
    }
    return false;
}


var fight = function(enemy) {
    // Repeat and execute as long as the enemy-robot is alive
    while(enemy.health > 0 && playerInfo.health > 0) {
    // Place fight function code block here . . .
    // Alert players that they are starting the round
        if (fightOrSkip()) {
            // If true, leave fight by breaking loop
        console.log(getPlayerName);
        break;
        }
        // Generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    // Log a resulting message to the console so we know that it worked. 
    console.log(playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.');

    // Check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
        // Award player money for winning
        playerInfo.money = playerInfo.money + 20;
        // Leave while() loop since enemy is dead
        break;
    }
    else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // Generate random damage value based on enemy's attack power
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);

    //Log a resulting message to the console so we know that it worked.
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

    // Check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
    }
    else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }

}
}


// Start the game when the page loads
startGame();
