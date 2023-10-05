/**
 * This is the brute force solution with O(2^n) time complexity
 * @param {Number} n - an integer
 * @returns {Number} - the nth number in the fibonacci sequence
 */
function nthFibBruteForce(n) {
  if (n <= 2) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

// memoization
// js object, keys will be arg to fn, value will be the return value
/**
 * This is a memoized solution with O(n) time complexity
 * @param {Number} n
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Number} - the nth number in the fibonacci sequence
 */
function nthFibMemo(n, memo = {}) {
  if (n <= 2) {
    return 1
  }
  if (n in memo) {
    return memo[n]
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

// tabulation
/**
 * This is the tabulation solution with O(n) time and space complexity
 * @param {Number} n - an integer
 * @returns {Number} - the nth number in the fibonacci sequence
 */
function nthFibTable(n) {
  const table = new Array(n + 1).fill(0)
  table[1] = 1
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }
  return table[n]
}

// console.log(nthFibTable(6))
// console.log(nthFibTable(7))
// console.log(nthFibTable(8))
// console.log(nthFibTable(50))


module.exports = {
    nthFibBruteForce,
    nthFibMemo,
    nthFibTable
}