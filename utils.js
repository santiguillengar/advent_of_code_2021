const fs = require('fs');
const basePath = './input/';

function getInput(path) {
  try {
    const data = fs.readFileSync(basePath + path);
    const arr = data.toString().split('\n').map((el) => +el);
    return arr;
  } catch (err) {
    console.error(err);
    return err;
  }  
}

function showResults(part1_result=undefined, part2_result=undefined) {
  console.log('\n---------------------------------------');
  console.log('RESULTS:');
  console.log('\nPART 1: ' + part1_result);
  console.log('PART2: ' + part2_result);
  console.log('---------------------------------------');
}

module.exports = {getInput, showResults};