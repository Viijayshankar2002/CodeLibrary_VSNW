function addOperators(num, target) {
    const res = [];
    
    function dfs(idx, expr, value, prev) {
      if (idx === num.length) {
        if (value === target) {
          res.push(expr);
        }
        return;
      }
      
      let curr = '';
      
      for (let i = idx; i < num.length; i++) {
        curr += num[i];
        
        if (curr.length > 1 && curr[0] === '0') {
          break;
        }
        
        const numVal = parseInt(curr);
        
        if (idx === 0) {
          dfs(i + 1, curr, numVal, numVal);
        } else {
          dfs(i + 1, expr + '+' + curr, value + numVal, numVal);
          dfs(i + 1, expr + '-' + curr, value - numVal, -numVal);
          dfs(i + 1, expr + '*' + curr, value - prev + prev * numVal, prev * numVal);
        }
      }
    }
    
    dfs(0, '', 0, 0);
    
    return res;
  }