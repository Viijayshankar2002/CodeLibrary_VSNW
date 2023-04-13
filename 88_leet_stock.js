function maxProfit(prices) {
    const n = prices.length;
    if (n < 2) return 0;
    
    // initialize dp arrays
    const buy = new Array(n).fill(0);
    const sell = new Array(n).fill(0);
    const cool = new Array(n).fill(0);
    
    // set initial values
    buy[0] = -prices[0];
    sell[0] = 0;
    cool[0] = 0;
    
    // fill dp arrays
    for (let i = 1; i < n; i++) {
      buy[i] = Math.max(buy[i-1], cool[i-1] - prices[i]);
      sell[i] = Math.max(sell[i-1], buy[i-1] + prices[i]);
      cool[i] = Math.max(cool[i-1], sell[i-1]);
    }
    
    return sell[n-1];
  }
  