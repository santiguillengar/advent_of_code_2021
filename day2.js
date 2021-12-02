/**
 * DAY 2: https://adventofcode.com/2021/day/2 
 */

const utils = require('./utils');

const INPUT_PART1_PATH = 'input_day2_part1.txt';
const INPUT_PART2_PATH = 'input_day2_part2.txt';


function part1() {
  const input = utils.readLines(INPUT_PART1_PATH).map(line => line.split(' '));
  let depth = 0;
  let position = 0;

  input.map(function(move) {
    switch(move[0].toLowerCase()) {
      case 'forward':
        position += Number(move[1]);
        break;
      case 'up':
        depth -= Number(move[1]);
        break;
      case 'down':
        depth += Number(move[1]);
        break;
    }
  });

  return depth*position;

}

function part2() {
  const input = utils.readLines(INPUT_PART2_PATH).map(line => line.split(' '));
  let aim = 0;
  let depth = 0;
  let position = 0;

  input.map(function(move) {
    switch(move[0].toLowerCase()) {
      case 'forward':
        position += Number(move[1]);
        depth += Number(move[1])*aim;
        break;
      case 'up':
        aim -= Number(move[1]);
        break;
      case 'down':
        aim += Number(move[1]);
        break;
    }
  });

  return depth*position;
}

const part1_result = part1()
const part2_result = part2()

utils.showResults(part1_result, part2_result);