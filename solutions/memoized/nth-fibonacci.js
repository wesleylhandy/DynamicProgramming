/**
 * This is a memoized solution with O(n) time complexity
 * @param {Number} n
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Number} - the nth number in the fibonacci sequence
 */
function memoizedNthFibonacci(n, memo = {}) {
    if (n <= 2) {
      return 1
    }
    if (n in memo) {
      return memo[n]
    }
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

module.exports.memoizedNthFibonacci = memoizedNthFibonacci