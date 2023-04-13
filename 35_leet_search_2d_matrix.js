/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
  const n = matrix[0].length;
  let low = 0;
  let high = m * n - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = matrix[Math.floor(mid / n)][mid % n];
    if (target === element) {
      return true;
    } else if (target < element) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
};