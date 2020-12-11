/**
 * Determines all the ways an array of strings includes values that could be added together to equal a targetWord
 * Brute Force solution with O(n^m) time complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @returns {[[String]]} a 2-D array of all the  ways the wordbank can construct the targetWord but has O(n^m) space complexity
 */
function allConstructBruteForce(targetWord, wordBank) {
  if (targetWord === '') return [[]]

  const result = []

  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.substring(word.length)
      const suffixWays = allConstructBruteForce(suffix, wordBank)
      const targetWays = suffixWays.map((way) => [word, ...way])
      result.push(...targetWays)
    }
  }
  return result
}

// console.log(allConstructBruteForce("abcdef", ["ab","abc","cd","def","abcd"]))
// console.log(allConstructBruteForce("purple", ["purp","p","le","ur","purpl"]))
// console.log(allConstructBruteForce("skateboard", ["bo","rd","ate","t","ska","sk","boar"]))
// console.log(allConstructBruteForce("enterapotentpot", ["a","p","ent","enter","ot","o","t"]))
// console.log(allConstructBruteForce("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]))

/**
 * Determines all the ways an array of strings includes values that could be added together to equal a targetWord
 * Memoized solution with O(n*m) with O(n^m) time complexity, where n is the length of wordBank and m is the length of the target word
 * Worst Case will cause Maximum call stack size exceeded Error
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @param {Object} memo - the object containing previously discovered values
 * @returns {[[String]]} a 2-D array of allthe  ways the wordbank can construct the targetWord
 */
function allConstructMemo(targetWord, wordBank, memo = {}) {
  if (targetWord === '') return [[]]
  if (targetWord in memo) return memo[targetWord]

  const result = []

  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.substring(word.length)
      const suffixWays = allConstructMemo(suffix, wordBank, memo)
      const targetWays = suffixWays.map()
      result.push(...targetWays)
    }
  }
  memo[targetWord] = result
  return result
}

// console.log(allConstructMemo("abcdef", ["ab","abc","cd","def","abcd"]))
// console.log(allConstructMemo("purple", ["purp","p","le","ur","purpl"]))
// console.log(allConstructMemo("skateboard", ["bo","rd","ate","t","ska","sk","boar"]))
// console.log(allConstructMemo("enterapotentpot", ["a","p","ent","enter","ot","o","t"]))
// console.log(allConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]))

/**
 * Determines all the ways an array of strings includes values that could be added together to equal a targetWord
 * Tabulation solution with O(n^m) space O(n^m) time complexity, where n is the length of wordBank and m is the length of the target word
 * Worst Case will cause Maximum call stack size exceeded Error
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @returns {[[String]]} a 2-D array of allthe  ways the wordbank can construct the targetWord
 */
function allConstructTable(targetWord, wordBank) {
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

// console.log(allConstructTable('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
// console.log(allConstructTable('purple', ['purp', 'p', 'le', 'ur', 'purpl']))
// console.log(allConstructTable('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(allConstructTable('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
// console.log(allConstructTable('eeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeeee', 'eeeee', 'eeeeee']))

module.exports = {
    allConstructBruteForce,
    allConstructMemo,
    allConstructTable
}
