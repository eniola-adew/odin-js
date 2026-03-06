const reverseString = function (str) {
  let splitWordsArray = str.split('');
  let reversedWordsArray = splitWordsArray.reverse();
  let wordInReverse = reversedWordsArray.join('');
  console.log(wordInReverse);
};

reverseString('hello there');
