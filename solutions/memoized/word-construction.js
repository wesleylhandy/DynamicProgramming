/**
 * Determines all the ways an array of strings includes values that could be added together to equal a targetWord
 * Memoized solution with O(n*m) with O(n^m) time complexity, where n is the length of wordBank and m is the length of the target word
 * Worst Case will cause Maximum call stack size exceeded Error
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @param {Object} memo - the object containing previously discovered values
 * @returns {[[String]]} a 2-D array of all the  ways the wordbank can construct the targetWord
 */
function memoizedWordConstructionsFromWordBank(targetWord, wordBank, memo = {}) {
  if (targetWord === '') return [[]]
  if (targetWord in memo) return memo[targetWord]

  const result = []

  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.substring(word.length)
      const suffixWays = memoizedWordConstructionsFromWordBank(suffix, wordBank, memo)
      const targetWays = suffixWays.map((way) => [word, ...way])
      result.push(...targetWays)
    }
  }
  memo[targetWord] = result
  return result
}

module.exports.memoizedWordConstructionsFromWordBank = memoizedWordConstructionsFromWordBank;
