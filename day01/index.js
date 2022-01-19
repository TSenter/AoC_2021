const fs = require('fs');

const INPUT_FILE = `${__dirname}/input.txt`;

const input = fs.readFileSync(INPUT_FILE)
  .toString()
  .split('\n')
  .map((str) => parseInt(str));

let increases = 0;

let previous = 0;
for (let idx = 2; idx < input.length; idx++) {
  const sum = input[idx - 2] + input[idx - 1] + input[idx];

  const increased = sum > previous;

  if (increased && !!previous) {
    increases++;
  }
  previous = sum;
}

console.log(`There were a total of ${increases} increases`);
