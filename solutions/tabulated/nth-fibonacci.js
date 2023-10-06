/**
 * This is the tabulation solution with O(n) time and space complexity
 * @param {Number} n - an integer
 * @returns {Number} - the nth number in the fibonacci sequence
 */
function nthFibonacci(n) {
    const table = new Array(n + 1).fill(0)
    table[1] = 1
    for (let i = 0; i <= n; i++) {
      table[i + 1] += table[i]
      table[i + 2] += table[i]
    }
    return table[n]
}

module.exports.nthFibonacci = nthFibonacci