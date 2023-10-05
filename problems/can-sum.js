/**
 * Determines whether or not an array of numbers includes values that could be added together to equal a target sum
 * Brute Force solution with O(n^m) time complexity, where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @returns {Boolean} - whether or not the numbers array includes the sum
 */
function canSumBruteForce(targetSum, numbers) {
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (let num of numbers) {
    const remainder = targetSum - num
    if (canSumBruteForce(remainder, numbers) === true) {
      return true
    }
  }
  return false
}

/**
 * Determines whether or not an array of numbers includes values that could be added together to equal a target sum
 * Memoized solution with O(n*m) time complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Boolean} - whether or not the numbers array includes the sum
 */
function canSumMemo(targetSum, numbers, memo = {}) {
  if (targetSum === 0) return true
  if (targetSum < 0) return false
  if (targetSum in memo) return memo[targetSum]

  for (let num of numbers) {
    const remainder = targetSum - num
    if (canSumMemo(remainder, numbers, memo) === true) {
      memo[targetSum] = true
      return true
    }
  }
  memo[targetSum] = false
  return false
}

/**
 * Determines whether or not an array of numbers includes values that could be added together to equal a target sum
 * Tabulated solution with O(n*m) time complexity and O(m) space complexity where n is the length of target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Boolean} - whether or not the numbers array includes the sum
 */
function canSumTable(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(false)
  table[0] = true
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        if (i + num <= targetSum) table[i + num] = true
      }
    }
  }
  return table[targetSum]
}

// console.log(canSumTable(7, [2, 3]))
// console.log(canSumTable(7, [5, 3, 4, 7]))
// console.log(canSumTable(7, [2, 4]))
// console.log(canSumTable(8, [2, 3, 5]))
// console.log(canSumTable(300, [7, 14]))

module.exports = {
    canSumBruteForce,
    canSumMemo,
    canSumTable
}