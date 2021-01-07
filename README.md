
    
    // If player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

 

    // If no (false), ask question again by running fight() again
    else {
        fight();
    }

       else {
    window.alert("You need to choose a valid option. Try again!");
}

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    // If player choses to "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    // Subtract money from playerInfo.money for skipping
    playerInfo.money = Math.max(0, playerInfo.money - 10);
    console.log("playerInfo.money", playerInfo.money);
    break;
    } 