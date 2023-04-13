class NumMatrix {
    constructor(matrix) {
      const m = matrix.length;
      const n = matrix[0].length;
      this.sums = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
      for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
          this.sums[i][j] = matrix[i - 1][j - 1] + this.sums[i - 1][j] + this.sums[i][j - 1] - this.sums[i - 1][j - 1];
        }
      }
    }
  
    sumRegion(row1, col1, row2, col2) {
      return this.sums[row2 + 1][col2 + 1] - this.sums[row1][col2 + 1] - this.sums[row2 + 1][col1] + this.sums[row1][col1];
    }
  }
  