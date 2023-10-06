/**
 * Determines the best combination of numbers within an array that can be summed together to equal a target value
 * O(n*m^2) time complexity and space complexty of O(m*n) where n is the length of array and m is the target value
 * @param {Number} targetSum
 * @param {Number[]} numbers
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Number[]|null} the numbers in array that add up to targetSum or null if not found
 */
function bestAddendsForSum(targetSum, numbers) {
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

module.exports.bestAddendsForSum = bestAddendsForSum;