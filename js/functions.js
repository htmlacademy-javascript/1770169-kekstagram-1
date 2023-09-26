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
