function nthUglyNumber(n) {
    let dp = [1]; // Initialize dynamic programming array with first ugly number
    let p2 = 0, p3 = 0, p5 = 0; // Initialize pointers for multiplying by 2, 3, and 5 respectively
    for (let i = 1; i < n; i++) {
      // Compute next ugly number as the minimum of the products of the current pointers
      let nextUgly = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
      dp.push(nextUgly);
      // Update the pointers for multiplying by 2, 3, and 5 if necessary
      if (dp[p2] * 2 <= nextUgly) p2++;
      if (dp[p3] * 3 <= nextUgly) p3++;
      if (dp[p5] * 5 <= nextUgly) p5++;
    }
    return dp[n - 1];
  }