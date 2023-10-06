/**
 * This is the brute force solution with O(2^n) time complexity
 * @param {Number} n - an integer
 * @returns {Number} - the nth number in the fibonacci sequence
 */
function nthFibonacci(n) {
  if (n <= 2) {
    return 1
  }
  return nthFibonacci(n - 1) + nthFibonacci(n - 2)
}

module.exports.nthFibonacci = nthFibonacci