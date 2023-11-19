// Player Function

let createPlayer = (health, strength, attack) => ({
    health,
    strength,
    attack,
  
    // Attack and Healt Function
    attackOpponent: (defender, attackDieRoll, defendDieRoll) => {
      let attackDamage = attack * attackDieRoll;
      let defendDamage = defender.strength * defendDieRoll;
  
      const damageTaken = Math.max(0, attackDamage - defendDamage);
      defender.health -= damageTaken;
  
      return damageTaken;
    },
  });

  let GameArena = (playerA, playerB) => ({
    players: [playerA, playerB],
  
  
  // Main Game function
  
    playGame: () => {
      let currentPlayerIndex = playerA.health < playerB.health ? 0 : 1;
      let opponentIndex = 1 - currentPlayerIndex;
  
      while (playerA.health > 0 && playerB.health > 0) {
        let attackDieRoll = Math.floor(Math.random() * 6) + 1;
        let defendDieRoll = Math.floor(Math.random() * 6) + 1;
        console.log(attackDieRoll);
        console.log(defendDieRoll);
  
        let damageTaken = playerA.attackOpponent(
          playerB,
          attackDieRoll,
          defendDieRoll
        );
  
        console.log(
          `Player ${currentPlayerIndex + 1} attacks Player ${
            opponentIndex + 1
          } with damage ${damageTaken}.`
        );
  
        
        currentPlayerIndex = 1 - currentPlayerIndex;
        opponentIndex = 1 - currentPlayerIndex;
      }
  
      // Print the winner
      let winner = playerA.health > 0 ? 1 : 2;
      console.log(`Player ${winner} wins the game!`);
    },
  });


  const playerA = createPlayer(50, 5, 10);
  const playerB = createPlayer(100, 10, 5);

  const arena = GameArena(playerA, playerB);
  arena.playGame();


  module.exports = { createPlayer, GameArena };