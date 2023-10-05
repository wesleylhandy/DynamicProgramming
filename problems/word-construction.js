/**
 * Determines all the ways an array of strings includes values that could be added together to equal a targetWord
 * Brute Force solution with O(n^m) time complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {String[]} wordBank - an array of Strings used to compose the targetWord
 * @returns {String[][]} a 2-D array of all the  ways the wordbank can construct the targetWord but has O(n^m) space complexity
 * 
 * @example
 * wordConstructionsFromWordBank("abcdef", ["ab","abc","cd","def","abcd"]) // [ [ 'abc', 'def' ] ]
 * 
 * @example
 * wordConstructionsFromWordBank("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]) // Some attempts might use more time that you can imagine
 */
function bruteForceWordConstructionsFromWordBank(targetWord, wordBank) {
  if (targetWord === '') return [[]]

  const result = []

  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.substring(word.length)
      const suffixConstructions = bruteForceWordConstructionsFromWordBank(suffix, wordBank)
      const targetConstructions = suffixConstructions.map((way) => [word, ...way])
      result.push(...targetConstructions)
    }
  }
  return result
}

module.exports.bruteForceWordConstructionsFromWordBank = bruteForceWordConstructionsFromWordBank;

