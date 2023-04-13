function nthSuperUglyNumber(n, primes) {
    const m = primes.length;
    const dp = new Array(n+1).fill(0);
    const indices = new Array(m).fill(1);
  
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
      let minVal = Number.MAX_SAFE_INTEGER;
      for (let j = 0; j < m; j++) {
        const currVal = primes[j] * dp[indices[j]];
        if (currVal < minVal) {
          minVal = currVal;
        }
      }
      dp[i] = minVal;
      for (let j = 0; j < m; j++) {
        if (minVal === primes[j] * dp[indices[j]]) {
          indices[j]++;
        }
      }
    }
    
    return dp[n];
  }
  