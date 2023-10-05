/**
 * Determines whether or not an array of strings includes values that could be added together to equal a targetWord
 * Memoized solution with O(n*m) with O(n^m) time complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {[String]} wordBank - an array of Strings used to compose the targetWord
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Boolean} - whether or not the wordbank can construct the targetWord
 */
function memoizedCanConstructWord(targetWord, wordBank, memo = {}) {
    if (targetWord === '') return true
    if (targetWord in memo) return memo[targetWord]
  
    for (let word of wordBank) {
      if (targetWord.indexOf(word) === 0) {
        const suffix = targetWord.substring(word.length)
        if (memoizedCanConstructWord(suffix, wordBank, memo) === true) {
          memo[targetWord] = true
          return true
        }
      }
    }
    memo[targetWord] = false
    return false
}

module.exports.memoizedCanConstructWord = memoizedCanConstructWord;