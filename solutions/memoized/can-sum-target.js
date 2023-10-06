/**
 * Determines whether or not an array of numbers includes values that could be added together to equal a target sum
 * Memoized solution with O(n*m) time complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {Number[]} numbers
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Boolean} - whether or not the numbers array includes the sum
 */
function canSumTarget(targetSum, numbers, memo = {}) {
    if (targetSum === 0) return true
    if (targetSum < 0) return false
    if (targetSum in memo) return memo[targetSum]
  
    for (let num of numbers) {
      const remainder = targetSum - num
      if (canSumTarget(remainder, numbers, memo) === true) {
        memo[targetSum] = true
        return true
      }
    }
    memo[targetSum] = false
    return false
}

module.exports.canSumTarget = canSumTarget