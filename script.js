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
};

logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
};

isDead = (health) => {
    return health <= 0 ? true : false;
};

function fight(player1, player2, player1Health, player2Health) {
    // TODO Figure out what condition needs to be true in the while loop
    while (true) {

    };
};