const { createPlayer, GameArena } = require('./index');



test('createPlayer function', () => {
  const player = createPlayer(50, 5, 10);
  expect(player.health).toBe(50);
  expect(player.strength).toBe(5);
  expect(player.attack).toBe(10);
});