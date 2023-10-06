/**
 * Determines the best combination of numbers within an array that can be summed together to equal a target value
 * O(n^m * m) time complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @returns {[Number]|null} the numbers in array that add up to targetSum or null if not found
 */
function bruteForceBestAddendsForSum(targetSum, numbers) {
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bruteForceBestAddendsForSum(remainder, numbers)
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num]
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }
  return shortestCombination
}

module.exports.bruteForceBestAddendsForSum = bruteForceBestAddendsForSum;
