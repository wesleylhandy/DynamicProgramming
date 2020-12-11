/**
 * Determines the best combination of numbers within an array that can be summed together to equal a target value
 * O(n^m * m) time complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @returns {[Number]|null} the numbers in array that add up to targetSum or null if not found
 */
function bestSumBruteForce(targetSum, numbers) {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSumBruteForce(remainder, numbers)
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num]
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }
  return shortestCombination
}

/**
 * Determines the best combination of numbers within an array that can be summed together to equal a target value
 * O(n*m^2) time complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @param {Object} memo - the object containing previously discovered values
 * @returns {[Number]|null} the numbers in array that add up to targetSum or null if not found
 */
function bestSumMemo(targetSum, numbers, memo = {}) {
  if (targetSum === 0) return []
  if (targetSum < 0) return null
  if (targetSum in memo) return memo[targetSum]

  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSumMemo(remainder, numbers, memo)
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num]
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }
  memo[targetSum] = shortestCombination
  return shortestCombination
}

// console.log(bestSumMemo(7, [5,2,3, 4, 7]))
// console.log(bestSumMemo(7, [2,3]))
// console.log(bestSumMemo(7, [2,4]))
// console.log(bestSumMemo(14, [2, 3, 5, 6, 7]))
// console.log(bestSumMemo(300, [7,14]))
// console.log(bestSumMemo(8, [2, 3, 5]))
// console.log(bestSumMemo(8, [3, 5]))
// console.log(bestSumMemo(100, [1, 2, 3, 5, 20, 25, 33, 50, 70]))

/**
 * Determines the best combination of numbers within an array that can be summed together to equal a target value
 * O(n*m^2) time complexity and space complexty of O(m*n) where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @param {Object} memo - the object containing previously discovered values
 * @returns {[Number]|null} the numbers in array that add up to targetSum or null if not found
 */
function bestSumTable(targetSum, numbers) {
  const table = new Array(targetSum + 1).fill(null)
  table[0] = []

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num]
        if (!table[i + num] || combination.length < table[i + num].length) {
          table[i + num] = combination
        }
      }
    }
  }
  return table[targetSum]
}

// console.log(bestSumTable(7, [5, 2, 3, 4, 7]))
// console.log(bestSumTable(7, [2, 3]))
// console.log(bestSumTable(7, [2, 4]))
// console.log(bestSumTable(14, [2, 3, 5, 6, 7]))
// console.log(bestSumTable(300, [7, 14]))
// console.log(bestSumTable(8, [2, 3, 5]))
// console.log(bestSumTable(8, [3, 5]))
// console.log(bestSumTable(100, [1, 2, 3, 5, 20, 25, 33, 50, 70]))

module.exports = {
    bestSumBruteForce,
    bestSumMemo,
    bestSumTable
}
