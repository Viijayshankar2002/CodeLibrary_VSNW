/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = grid.length;
  const n = grid[0].length;

  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m && grid[i][0] !== 1; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n && grid[0][j] !== 1; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (grid[i][j] !== 1) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
    }
  }

  return dp[m-1][n-1];
};