/**
 * This is the memoized solution with O(n+m) time complexity
 * @param {Number} m
 * @param {Number} n
 * @param {Object} memo - the object containing previously discovered values
 * @returns {Number} - the number of paths through the grid
 */
function gridTraveler(m, n, memo = {}) {
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0
    const key = m + ',' + n
    if (key in memo) {
      return memo[key]
    }
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
}

module.exports.gridTraveler = gridTraveler