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
  aim: 0,
};

for (const { dir, dist } of input) {
  if (dir == 'forward') {
    position.x += dist;
    position.y -= position.aim * dist;
  } else if (dir == 'up') {
    position.aim += dist;
  } else if (dir == 'down') {
    position.aim -= dist;
  }
}

console.log(`Final position: x = ${position.x}, y = ${position.y}`);
console.log(`Answer = ${position.x * position.y}`);
