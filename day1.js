/**
 * DAY 1: https://adventofcode.com/2021/day/1 
 */

const utils = require('./utils');

const INPUT_PART1_PATH = 'input_day1_part1.txt';
const INPUT_PART2_PATH = 'input_day1_part2.txt';


function part1() {
  const input = utils.readLines(INPUT_PART1_PATH).map(Number);
  let count = 0;

  for (let i = 1; i < input.length; i++) {
    count = (input[i] > input[i-1]) ? ++count : count;
  }

  return count;
}

function part2() {
  const input = utils.readLines(INPUT_PART2_PATH).map(Number);
  let count = 0;

  for (let i=1; i < input.length - 2; i++) {
    const windowSum = input[i] + input[i+1] + input[i+2];
    const prevWindowSum = input[i-1] + input[i] + input[i+1];

    count = (windowSum > prevWindowSum) ?  ++count : count;
  }

  return count;
}

const part1_result = part1()
const part2_result = part2()

utils.showResults(part1_result, part2_result);