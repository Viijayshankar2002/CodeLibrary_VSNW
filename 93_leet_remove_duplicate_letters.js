function removeDuplicateLetters(s) {
    const stack = [];
    const lastOccurrence = {};
    const seen = new Set();
  
    for (let i = 0; i < s.length; i++) {
      lastOccurrence[s[i]] = i;
    }
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
  
      if (!seen.has(c)) {
        while (
          stack.length > 0 &&
          c < stack[stack.length - 1] &&
          i < lastOccurrence[stack[stack.length - 1]]
        ) {
          seen.delete(stack.pop());
        }
  
        stack.push(c);
        seen.add(c);
      }
    }
  
    return stack.join('');
  }
  