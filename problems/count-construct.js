/**
 * Determines the numbers of ways array of strings includes values that could be added together to equal a targetWord
 * Brute Force solution with O(n^m*m) time complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @returns {Number} - the number of ways the wordbank can construct the targetWord
 */
function countConstructBruteForce(targetWord, wordBank) {
  if (targetWord === '') return 1

  let totalCount = 0

  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      totalCount += countConstructBruteForce(targetWord.substring(word.length), wordBank)
    }
  }
  return totalCount
}

// console.log(countConstructBruteForce("abcdef", ["ab","abc","cd","def","abcd"]))
// console.log(countConstructBruteForce("purple", ["purp","p","le","ur","purpl"]))
// console.log(countConstructBruteForce("skateboard", ["bo","rd","ate","t","ska","sk","boar"]))
// console.log(countConstructBruteForce("enterapotentpot", ["a","p","ent","enter","ot","o","t"]))
// console.log(countConstructBruteForce("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]))

/**
 * Determines the numbers of ways array of strings includes values that could be added together to equal a targetWord
 * Memoized solution with O(n*m) with O(n^m) time complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Number} - the number of ways the wordbank can construct the targetWord
 */
function countConstructMemo(targetWord, wordBank, memo = {}) {
  if (targetWord === '') return 1
  if (targetWord in memo) return memo[targetWord]

  let totalCount = 0

  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      totalCount += countConstructMemo(targetWord.substring(word.length), wordBank, memo)
    }
  }
  memo[targetWord] = totalCount
  return totalCount
}

// console.log(countConstructMemo("abcdef", ["ab","abc","cd","def","abcd"]))
// console.log(countConstructMemo("purple", ["purp","p","le","ur","purpl"]))
// console.log(countConstructMemo("skateboard", ["bo","rd","ate","t","ska","sk","boar"]))
// console.log(countConstructMemo("enterapotentpot", ["a","p","ent","enter","ot","o","t"]))
// console.log(countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]))

/**
 * Determines the numbers of ways array of strings includes values that could be added together to equal a targetWord
 * Tabulation solution with O(n*m^2) time and O(m) space complexity complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @returns {Number} - the number of ways the wordbank can construct the targetWord
 */
function countConstructTable(targetWord, wordBank, memo = {}) {
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

// console.log(countConstructTable('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
// console.log(countConstructTable('purple', ['purp', 'p', 'le', 'ur', 'purpl']))
// console.log(countConstructTable('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(countConstructTable('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
// console.log(
//   countConstructTable('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeeee',
//     'eeeee',
//     'eeeeee',
//   ])
// )

module.exports = {
    countConstructBruteForce,
    countConstructMemo,
    countConstructTable
}