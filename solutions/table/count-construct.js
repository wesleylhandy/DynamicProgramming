/**
 * Determines the numbers of ways array of strings includes values that could be added together to equal a targetWord
 * Tabulation solution with O(n*m^2) time and O(m) space complexity complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @returns {Number} - the number of ways the wordbank can construct the targetWord
 */
function tabulatedWordsFromWordBankCount(targetWord, wordBank) {
    const table = new Array(targetWord.length + 1).fill(0)
    table[0] = 1
  
    for (let i = 0; i <= targetWord.length; i++) {
      for (let word of wordBank) {
        if (targetWord.slice(i, i + word.length) === word) {
          table[i + word.length] += table[i]
        }
      }
    }
    return table[targetWord.length]
}

module.exports.tabulatedWordsFromWordBankCount = tabulatedWordsFromWordBankCount;
  