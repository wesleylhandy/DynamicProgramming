/**
 * This is the brute force solution with O(2^n) time complexity
 * @param {Number} n - an integer
 * @returns {Number} - the nth number in the fibonacci sequence
 */
function bruteForceNthFibonacci(n) {
  if (n <= 2) {
    return 1
  }
  return bruteForceNthFibonacci(n - 1) + bruteForceNthFibonacci(n - 2)
}

module.exports.bruteForceNthFibonacci = bruteForceNthFibonacci