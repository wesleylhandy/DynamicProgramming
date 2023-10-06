// 2d Grid begin top-left and travel to bottom-right but can only go right or down, not diagonally

/**
 * This is the brute force solution with O(2^(n+m)) time complexity
 * @param {Number} m
 * @param {Number} n
 * @returns {Number} - the number of paths through the grid
 */
function bruteForceGridTraveler(m, n) {
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0
  return bruteForceGridTraveler(m - 1, n) + bruteForceGridTraveler(m, n - 1)
}

module.exports.bruteForceGridTraveler = bruteForceGridTraveler