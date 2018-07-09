/* Return the length of the longest word in the provided sentence.
Your response should be a number. */

function findLongestWordLength(str) {
    str = str.split(' ');
    let longestWord = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].length > longestWord) {
       longestWord = str[i].length;
      }
    }
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  /*
function findLongestWord(str) {
  let longestWord = str.split(' ').sort((a, b) => b.length - a.length);
  return longestWord[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
  */