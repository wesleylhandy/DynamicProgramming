// 2d Grid begin top-left and travel to bottom-right but can only go right or down, not diagonally

/**
 * This is the brute force solution with O(2^(n+m)) time complexity
 * @param {Number} m
 * @param {Number} n
 * @returns {Number} - the number of paths through the grid
 */
function gridTravelerBruteForce(m, n) {
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  return gridTravelerBruteForce(m - 1, n) + gridTravelerBruteForce(m, n - 1)
}

// memoization
/**
 * This is the memoized solution with O(n+m) time complexity
 * @param {Number} m
 * @param {Number} n
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Number} - the number of paths through the grid
 */
function gridTravelerMemo(m, n, memo = {}) {
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  const key = m + ',' + n
  if (key in memo) {
    return memo[key]
  }
  memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo)
  return memo[key]
}

/**
 * This is a tabulated solution with O(m*n) time & space complexity
 * @param {Number} m
 * @param {Number} n
 * @returns {Number} - the number of paths through the grid
 */
function gridTravelerTable(m, n) {
  const table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
  table[1][1] = 1
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j]
      if (i + 1 <= m) table[i + 1][j] += current
      if (j + 1 <= n) table[i][j + 1] += current
    }
  }
  return table[m][n]
}

// console.log(gridTravelerTable(1, 1))
// console.log(gridTravelerTable(2, 3))
// console.log(gridTravelerTable(3, 2))
// console.log(gridTravelerTable(3, 3))
// console.log(gridTravelerTable(18, 18))

module.exports = {
    gridTravelerBruteForce,
    gridTravelerMemo,
    gridTravelerTable
}