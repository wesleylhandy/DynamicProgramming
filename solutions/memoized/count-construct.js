/**
 * Determines the numbers of ways array of strings includes values that could be added together to equal a targetWord
 * Memoized solution with O(n*m) with O(n^m) time complexity, where n is the length of wordBank and m is the length of the target word
 * @param {String} targetWord - the String to be used to determine if it can be constructed
 * @param {String[]} wordBank - an array of Strings used to compose the targetWord
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Number} - the number of ways the wordbank can construct the targetWord
 */
function wordsFromWordBankCount(targetWord, wordBank, memo = {}) {
    if (targetWord === '') return 1
    if (targetWord in memo) return memo[targetWord]
  
    let totalCount = 0
  
    for (let word of wordBank) {
      if (targetWord.indexOf(word) === 0) {
        totalCount += wordsFromWordBankCount(targetWord.substring(word.length), wordBank, memo)
      }
    }
    memo[targetWord] = totalCount
    return totalCount
}

module.exports.wordsFromWordBankCount = wordsFromWordBankCount