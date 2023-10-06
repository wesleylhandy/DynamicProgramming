/**
 * Determines whether or not an array of strings includes values that could be added together to equal a targetWord
 * Tabulation solution with O(n*m^2) with O(m) space complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {String[]} wordBank - an array of Strings used to compose the targetWord
 * @returns {Boolean} - whether or not the wordbank can construct the targetWord
 */
function canConstructWord(targetWord, wordBank) {
    const table = new Array(targetWord.length + 1).fill(false)
    table[0] = true
    for (let i = 0; i <= targetWord.length; i++) {
      if (table[i] === true) {
        for (let word of wordBank) {
          if (targetWord.slice(i, i + word.length) === word) {
            table[i + word.length] = true
          }
        }
      }
    }
    return table[targetWord.length]
}

module.exports.canConstructWord = canConstructWord