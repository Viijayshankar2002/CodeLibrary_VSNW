function removeInvalidParentheses(s) {
    const result = new Set();
    let minRemoved = Infinity;
    
    function remove(s, index, open, close, removed, current) {
      if (index === s.length) {
        if (open === close) {
          if (removed < minRemoved) {
            result.clear();
            minRemoved = removed;
          }
          if (removed === minRemoved) {
            result.add(current);
          }
        }
      } else {
        const c = s.charAt(index);
        if (c === '(') {
          if (open < s.length / 2) {
            remove(s, index + 1, open + 1, close, removed, current + c);
          }
          remove(s, index + 1, open, close, removed + 1, current);
        } else if (c === ')') {
          if (close < open) {
            remove(s, index + 1, open, close + 1, removed, current + c);
          }
          remove(s, index + 1, open, close, removed + 1, current);
        } else {
          remove(s, index + 1, open, close, removed, current + c);
        }
      }
    }
    
    remove(s, 0, 0, 0, 0, '');
    
    return Array.from(result);
  }
  