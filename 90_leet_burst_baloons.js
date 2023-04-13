function maxCoins(nums) {
    const n = nums.length;
    nums.unshift(1); // add dummy balloon at beginning
    nums.push(1); // add dummy balloon at end
    
    // initialize dp array
    const dp = new Array(n+2).fill(0).map(() => new Array(n+2).fill(0));
    
    // fill dp array in bottom-up manner
    for (let len = 1; len <= n; len++) {
      for (let i = 1; i <= n - len + 1; i++) {
        const j = i + len - 1;
        for (let k = i; k <= j; k++) {
          dp[i][j] = Math.max(dp[i][j], dp[i][k-1] + nums[i-1] * nums[k] * nums[j+1] + dp[k+1][j]);
        }
      }
    }
    
    return dp[1][n];
  }
  