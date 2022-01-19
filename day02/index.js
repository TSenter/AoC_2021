const { doesNotThrow } = require('assert');
const fs = require('fs');

const INPUT_FILE = `${__dirname}/input.txt`;

const input = fs.readFileSync(INPUT_FILE)
  .toString()
  .split('\n')
  .map(
    (line) => {
      const [dir, dist] = line.split(' ');
      return { dir, dist: parseInt(dist) }
    }
  );

const position = {
  x: 0,
  y: 0,
};

for (const { dir, dist } of input) {
  if (dir == 'forward') {
    position.x += dist;
  } else if (dir == 'up') {
    position.y -= dist;
  } else if (dir == 'down') {
    position.y += dist;
  }
}

console.log(`Final position: x = ${position.x}, y = ${position.y}`);
console.log(`Answer = ${position.x * position.y}`);
