/**
 * Determines if a combination of numbers within an array can be summed together to equal a target value and returns that set
 * O(n^m * m) time complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {Number[]} numbers
 * @returns {Number[]|null} the numbers in array that add up to targetSum or null if not found
 */
function numbersThatMakeSum(targetSum, numbers) {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = numbersThatMakeSum(remainder, numbers)
    if (remainderResult !== null) {
      return [...remainderResult, num]
    }
  }
  return null
}

module.exports.numbersThatMakeSum = numbersThatMakeSum
