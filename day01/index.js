const fs = require('fs');

const INPUT_FILE = `${__dirname}/input.txt`;

const input = fs.readFileSync(INPUT_FILE)
  .toString()
  .split('\n')
  .map((str) => parseInt(str));

let increases = 0;

for (let idx = 1; idx < input.length; idx++) {
  if (input[idx] > input[idx - 1]) {
    increases++;
  }
}

console.log(`There were a total of ${increases} increases`);
