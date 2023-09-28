const checkPalindrom = (word) => {
  if (typeof word !== 'string') {
    return 'Необходимо передать текст';
  }

  const lowerCase = word.toLowerCase();
  const withoutSpaces = lowerCase.split(' ').join('');

  for (let i = 0; i <= Math.floor(withoutSpaces.length / 2); i++) {
    if (withoutSpaces[i] !== withoutSpaces[withoutSpaces.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

const getNumber = (text) => {
  if (typeof text === 'string') {
    let num = '';
    for (const letter of text) {
      if (!isNaN(parseInt(letter, 10))) {
        num += letter;
      }
    }
    return num.length === 0 ? NaN : Number(num);
  }

  if (typeof text === 'number') {
    let number = Math.abs(text);

    if (number % 1 !== 0) {
      while (number % 1 !== 0) {
        number *= 10;
      }
    }

    return number;
  }

  return 'Необходимо передать строку или число.';
};

const extendText = (originalText, maxLength, padText) => {
  if (originalText >= maxLength) {
    return originalText;
  }

  if (padText.length + originalText.length > maxLength) {
    const count = maxLength - originalText.length;
    return padText.slice(0, count) + originalText;
  }

  let filledText = originalText;

  while (filledText.length !== maxLength) {
    const remainder = maxLength - filledText.length;
    filledText = padText.substr(0, remainder) + filledText;
  }

  return filledText;
};

const checkLength = (text, maxLength) => text.length <= maxLength;

export default {checkPalindrom, getNumber, extendText, checkLength};
