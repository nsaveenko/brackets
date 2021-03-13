function check(str, bracketsConfig) {
  const config = {};
  const isEvenAmountOfBrackets = str.length % 2 != 0;

  if (isEvenAmountOfBrackets) {
    return false;
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    config[bracketsConfig[i][0]] = bracketsConfig[i];
  }

  let tempStr = str;
  let bracketsPairsIds = [-1];


  while (bracketsPairsIds.length > 0) {
    bracketsPairsIds = [];
    let strWithoutFoundPair = '';
    
    for (let i = 0; i < tempStr.length - 1; i++) {
      const bracket = tempStr[i];
      const bracketConfig = config[bracket];

      if (bracketConfig && tempStr[i + 1] === bracketConfig[1]) {
        bracketsPairsIds.push(i);
        bracketsPairsIds.push(i + 1);
      }
    }
    

    for (let i = 0; i < tempStr.length; i++) {
      if (!bracketsPairsIds.includes(i)) {
        strWithoutFoundPair += tempStr[i];
      }
    }

    tempStr = strWithoutFoundPair;
  }

  if (tempStr === '') return true;

  return false;
}

module.exports = check;