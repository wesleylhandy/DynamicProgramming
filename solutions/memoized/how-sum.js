/**
 * Determines if a combination of numbers within an array can be summed together to equal a target value and returns that set
 * O(n*m^2) time complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @param {Object} memo - the object containing previously discovered values
 * @returns {[Number]|null} the numbers in array that add up to targetSum or null if not found
 */
 function memoizedHowNumbersMakeSum(targetSum, numbers, memo = {}) {
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    if (targetSum in memo) return memo[targetSum]
  
    for (let num of numbers) {
      const remainder = targetSum - num
      const remainderResult = memoizedHowNumbersMakeSum(remainder, numbers, memo)
      if (remainderResult !== null) {
        memo[targetSum] = [...remainderResult, num]
        return memo[targetSum]
      }
    }
    memo[targetSum] = null
    return null
}

module.exports.memoizedHowNumbersMakeSum = memoizedHowNumbersMakeSum