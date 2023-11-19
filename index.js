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


  let player1 = createPlayer(100, 10, 5);
  let player2 = createPlayer(100, 8, 6);
  const arena = GameArena(player1, player2);
  arena.playGame();


let damage = player1.attackOpponent(player2, 0, 4);
console.log(`Player 2 took ${damage} damage. Player 2 health: ${player2.health}`);
