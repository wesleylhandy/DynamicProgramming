
/**
 * Determines if a combination of numbers within an array can be summed together to equal a target value and returns that set
 * O(m^2*n) time complexity with an O(m^2) space complexity where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {[Number]} numbers
 * @returns {[Number]|null} the numbers in array that add up to targetSum or null if not found
 */
function tabulatedHowNumbersMakeSum(targetSum, numbers) {
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

module.exports.tabulatedHowNumbersMakeSum = tabulatedHowNumbersMakeSum