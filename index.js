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

//   let player1 = createPlayer(100, 10, 5);
// let player2 = createPlayer(100, 8, 6);

// let damage = player1.attackOpponent(player2, 0, 4);
// console.log(`Player 2 took ${damage} damage. Player 2 health: ${player2.health}`);
