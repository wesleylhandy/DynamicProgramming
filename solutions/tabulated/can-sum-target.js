/**
 * Determines whether or not an array of numbers includes values that could be added together to equal a target sum
 * Tabulated solution with O(n*m) time complexity and O(m) space complexity where n is the length of target value
 * @param {Number} targetSum
 * @param {Number[]} numbers
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Boolean} - whether or not the numbers array includes the sum
 */
function canSumTarget(targetSum, numbers) {
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

module.exports.canSumTarget = canSumTarget;