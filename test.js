const { createPlayer, GameArena } = require('./index');


test('GameArena function', () => {
    const playerA = createPlayer(50, 5, 10);
    const playerB = createPlayer(100, 10, 5);
  
    const arena = GameArena(playerA, playerB);
    expect(arena.players.length).toBe(2);
    expect(arena.players[0]).toBe(playerA);
    expect(arena.players[1]).toBe(playerB);
  });

test('createPlayer function', () => {
  const player = createPlayer(50, 5, 10);
  expect(player.health).toBe(50);
  expect(player.strength).toBe(5);
  expect(player.attack).toBe(10);
});

  
  test('playGame method', () => {
    const playerA = createPlayer(50, 5, 10);
    const playerB = createPlayer(100, 10, 5);
  
    const arena = GameArena(playerA, playerB);
    arena.playGame();
  
    expect(playerA.health <= 0 || playerB.health <= 0).toBeTruthy();
  

    if (playerA.health <= 0) {
      expect(playerB.health > 0).toBeTruthy();
    } else {
      expect(playerA.health > 0).toBeTruthy();
    }
  });
  
  test('playGame method with specific die roll values', () => {
    jest.spyOn(Math, 'random').mockReturnValueOnce(0.5).mockReturnValueOnce(0.3);
  
    const playerA = createPlayer(50, 5, 10);
    const playerB = createPlayer(100, 10, 5);
  
    const arena = GameArena(playerA, playerB);
    arena.playGame();
  
  
    jest.restoreAllMocks();
  });
  
  test('playGame method with custom initial health values', () => {
    const playerA = createPlayer(75, 8, 12);
    const playerB = createPlayer(90, 7, 15);
  
    const arena = GameArena(playerA, playerB);
    arena.playGame();
  
    expect(playerA.health <= 0 || playerB.health <= 0).toBeTruthy();
  });
 