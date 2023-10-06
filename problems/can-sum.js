/**
 * Determines whether or not an array of numbers includes values that could be added together to equal a target sum
 * Brute Force solution with O(n^m) time complexity, where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {Number[]} numbers
 * @returns {Boolean} - whether or not the numbers array includes the sum
 */
function canSumTarget(targetSum, numbers) {
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (let num of numbers) {
    const remainder = targetSum - num
    if (canSumTarget(remainder, numbers) === true) {
      return true
    }
  }
  return false
}

module.exports.canSumTarget = canSumTarget
