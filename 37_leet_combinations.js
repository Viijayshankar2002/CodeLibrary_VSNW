/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
  
  function helper(start, count, curr) {
    if (count === k) {
      result.push(curr.slice()); // make a copy of the current combination
      return;
    }
    
    for (let i = start; i <= n; i++) {
      curr.push(i);
      helper(i + 1, count + 1, curr);
      curr.pop();
    }
  }
  
  helper(1, 0, []);
  
  return result;
};