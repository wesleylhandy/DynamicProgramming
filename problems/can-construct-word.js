/**
 * Determines whether or not an array of strings includes values that could be added together to equal a targetWord
 * Brute Force solution with O(n^m*m) time complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {String[]} wordBank - an array of Strings used to compose the targetWord
 * @returns {Boolean} - whether or not the wordbank can construct the targetWord
 */
function canConstructWord(targetWord, wordBank) {
  if (targetWord === '') return true
  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.substring(word.length)
      if (canConstructWord(suffix, wordBank) === true) {
        return true
      }
    }
  }
  return false
}

module.exports.canConstructWord = canConstructWord;
