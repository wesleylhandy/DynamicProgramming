/**
 * Determines whether or not an array of strings includes values that could be added together to equal a targetWord
 * Brute Force solution with O(n^m*m) time complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @returns {Boolean} - whether or not the wordbank can construct the targetWord
 */
function canConstructBruteForce(targetWord, wordBank) {
  if (targetWord === '') return true
  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.substring(word.length)
      if (canConstructBruteForce(suffix, wordBank) === true) {
        return true
      }
    }
  }
  return false
}

// console.log(canConstructBruteForce("abcdef", ["ab","abc","cd","def","abcd"]))
// console.log(canConstructBruteForce("skateboard", ["bo","rd","ate","t","ska","sk","boar"]))
// console.log(canConstructBruteForce("enterapotentpot", ["a","p","ent","enter","ot","o","t"]))
// console.log(canConstructBruteForce("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]))

/**
 * Determines whether or not an array of strings includes values that could be added together to equal a targetWord
 * Memoized solution with O(n*m) with O(n^m) time complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Boolean} - whether or not the wordbank can construct the targetWord
 */
function canConstructMemo(targetWord, wordBank, memo = {}) {
  if (targetWord === '') return true
  if (targetWord in memo) return memo[targetWord]

  for (let word of wordBank) {
    if (targetWord.indexOf(word) === 0) {
      const suffix = targetWord.substring(word.length)
      if (canConstructMemo(suffix, wordBank, memo) === true) {
        memo[targetWord] = true
        return true
      }
    }
  }
  memo[targetWord] = false
  return false
}

// console.log(canConstructMemo("abcdef", ["ab","abc","cd","def","abcd"]))
// console.log(canConstructMemo("skateboard", ["bo","rd","ate","t","ska","sk","boar"]))
// console.log(canConstructMemo("enterapotentpot", ["a","p","ent","enter","ot","o","t"]))
// console.log(canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeeee","eeeee","eeeeee"]))

/**
 * Determines whether or not an array of strings includes values that could be added together to equal a targetWord
 * Tabulation solution with O(n*m^2) with O(m) space complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @returns {Boolean} - whether or not the wordbank can construct the targetWord
 */
function canConstructTable(targetWord, wordBank) {
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

// console.log(canConstructTa

module.exports = {
    canConstructBruteForce,
    canConstructMemo,
    canConstructTable
}