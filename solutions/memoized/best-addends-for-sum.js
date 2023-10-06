/**
 * Determines the best combination of numbers within an array that can be summed together to equal a target value
 * O(n*m^2) time complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {Number[]} numbers
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Number[]|null} the numbers in array that add up to targetSum or null if not found
 */
function bestAddendsForSum(targetSum, numbers, memo = {}) {
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    if (targetSum in memo) return memo[targetSum]
  
    let shortestCombination = null
  
    for (let num of numbers) {
      const remainder = targetSum - num
      const remainderCombination = bestAddendsForSum(remainder, numbers, memo)
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

module.exports.bestAddendsForSum = bestAddendsForSum