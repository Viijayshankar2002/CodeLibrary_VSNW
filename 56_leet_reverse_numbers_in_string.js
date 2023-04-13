/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    s = s.trim();
    
    const words = s.split(/\s+/);
    
    words.reverse();
    
    return words.join(' ');
  };