/**
 * Determines if a combination of numbers within an array can be summed together to equal a target value and returns that set
 * O(n^m * m) time complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @returns {[Number]|null} the numbers in array that add up to targetSum or null if not found
 */
function howSumBruteForce(targetSum, numbers) {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSumBruteForce(remainder, numbers)
    if (remainderResult !== null) {
      return [...remainderResult, num]
    }
  }
  return null
}

/**
 * Determines if a combination of numbers within an array can be summed together to equal a target value and returns that set
 * O(n*m^2) time complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @param {Object} memo - the object containing previously discovered values
 * @returns {[Number]|null} the numbers in array that add up to targetSum or null if not found
 */
function howSumMemo(targetSum, numbers, memo = {}) {
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  if (targetSum in memo) return memo[targetSum]

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSumMemo(remainder, numbers, memo)
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num]
      return memo[targetSum]
    }
  }
  memo[targetSum] = null
  return null
}

// console.log(howSumMemo(7, [2,3]))
// console.log(howSumMemo(7, [2,4]))
// console.log(howSumMemo(14, [2, 3, 5, 6, 7]))
// console.log(howSumMemo(300, [7,14]))
// console.log(howSumMemo(8, [3, 5]))

/**
 * Determines if a combination of numbers within an array can be summed together to equal a target value and returns that set
 * O(m^2*n) time complexity with an O(m^2) space complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @returns {[Number]|null} the numbers in array that add up to targetSum or null if not found
 */
function howSumTable(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(null)
  table[0] = []
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        if (i + num <= targetSum) table[i + num] = [...table[i], num]
      }
    }
  }
  return table[targetSum]
}

// console.log(howSumTable(7, [2, 3]))
// console.log(howSumTable(7, [2, 4]))
// console.log(howSumTable(14, [2, 3, 5, 6, 7]))
// console.log(howSumTable(300, [7, 14]))
// console.log(howSumTable(8, [3, 5]))

module.exports = {
    howSumBruteForce,
    howSumMemo,
    howSumTable
}
