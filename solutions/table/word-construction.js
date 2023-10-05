/**
 * Determines all the ways an array of strings includes values that could be added together to equal a targetWord
 * Tabulation solution with O(n^m) space O(n^m) time complexity, where n is the length of wordBank and m is the length of the target word
 * Worst Case will cause Maximum call stack size exceeded Error
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @returns {[[String]]} a 2-D array of allthe  ways the wordbank can construct the targetWord
 */
function tabulatedWordConstructionsFromWordBank(targetWord, wordBank) {
    const table = new Array(targetWord.length + 1).fill().map(() => [])
    table[0] = [[]]
  
    for (let i = 0; i <= targetWord.length; i++) {
      for (let word of wordBank) {
        if (targetWord.slice(i, i + word.length) === word) {
          const newCombinations = table[i].map((subArray) => [...subArray, word])
          table[i + word.length].push(...newCombinations)
        }
      }
    }
    return table[targetWord.length]
}

module.exports.tabulatedWordConstructionsFromWordBank = tabulatedWordConstructionsFromWordBank;