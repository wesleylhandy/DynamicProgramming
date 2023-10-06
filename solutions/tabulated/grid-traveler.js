/**
 * This is a tabulated solution with O(m*n) time & space complexity
 * @param {Number} m
 * @param {Number} n
 * @returns {Number} - the number of paths through the grid
 */
function gridTraveler(m, n) {
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

module.exports.gridTraveler = gridTraveler