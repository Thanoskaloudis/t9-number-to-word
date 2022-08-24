const digitMapping = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

const letterCombinations = digits => {
  //add checks for input validation
  if (!/^[2-9]*$/.test(digits)) {
     throw new Error('digits should be between 2 and 9');
  }
  if(!digits.length) {
    return [];
  }

  // convert an input to an array of arrays e.g 23 -> [[‘a’, ‘b’, ‘c’], [‘d’, ‘f’, ‘g’]]
  const lettersArray = digits.split('').map(digit => {
    if(digitMapping[digit]){
      return digitMapping[digit]
    } else {
      return [''];
    }
  })

  // get all possible combination
  return lettersArray.reduce((prevEntry, currEntry) => {
    const combinations = [];
    prevEntry.reduce((noop, current) => {
       const temp = [...currEntry];
       temp.map(dig => combinations.push(`${current}${dig}`));
    }, '');
    return combinations;
  });
}

module.exports = { letterCombinations }