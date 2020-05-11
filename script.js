const fightBtn = document.getElementById("fightBtn");
const results = document.getElementById("results");
let playerOneName = prompt('Enter Player One Name: ');
let playerTwoName = prompt('Enter Player Two\'s Name: ');
document.getElementById("playerOneName").innerHTML = playerOneName;
document.getElementById("playerTwoName").innerHTML = playerTwoName;




fightBtn.addEventListener("click", function(){
    results.innerHTML = "";
    fight(playerOneName, playerTwoName, 100, 100);
});

randomDamage = () => {
    return Math.floor(Math.random() * 10);
};

chooseOption = (opt1, opt2) => {
    let randNum = Math.round(Math.random());
    return randNum === 1 ? opt1 : opt2;
};

const attackPlayer = function(health) {
    return health -= randomDamage();
};

logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
    results.innerHTML += `
        <li>
            <div> ${player} health: ${health} </div>
        </li> 
    `;
};

logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
    results.innerHTML += `
        <li>
            <div> ${winner} defeated ${loser} </div>
        </li> 
    `;
};

isDead = (health) => {
    return health <= 0 ? true : false;
};

function fight(player1, player2, player1Health, player2Health) {

    while(true) {
        let attacker = chooseOption(player1, player2);
        
        if(attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if(isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if(isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        };
    };
};


// fight("Colette", "Emily", 100, 100);