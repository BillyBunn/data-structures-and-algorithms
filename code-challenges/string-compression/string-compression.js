// declare function that takes string input
function stringCompression(inputStr) {
  // declare output variable as empty string
  let outputStr = '';

  let char = inputStr[0];
  let count = 1;

  // at each character, count the number of identical characters that come after it
  // until the character isn't the same
  // then, add that character and the count to the output string
  for (let i = 1; i < inputStr.length; i++) {
    if (inputStr[i] === char) {
      count++;
    } else {
      outputStr += char + count;
      char = inputStr[i];
      count = 1;
    }
  }

  outputStr += char + count;

  // compare input string to output string
  // if output is less than input, return output
  // otherwise return input
  if (outputStr < inputStr) return outputStr;
  return inputStr;
}

let str = 'aabcccccaaa';
// a2b1c5a3

stringCompression(str); //?
