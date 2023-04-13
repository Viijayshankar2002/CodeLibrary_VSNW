const memo = {};

function isScramble(s1, s2) {
  const n = s1.length;
  

  if (s1 === s2) return true;
  

  const count = Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) return false;
  }
  

  const key = s1 + "," + s2;
  if (key in memo) return memo[key];
  


  for (let i = 1; i < n; i++) {
    if (isScramble(s1.substr(0, i), s2.substr(0, i)) &&
        isScramble(s1.substr(i), s2.substr(i))) {
      memo[key] = true;
      return true;
    }
    if (isScramble(s1.substr(0, i), s2.substr(n-i)) &&
        isScramble(s1.substr(i), s2.substr(0, n-i))) {
      memo[key] = true;
      return true;
    }
  }
  memo[key] = false;
  return false;
}

const s1 = "great";
const s2 = "rgeat";
console.log(isScramble(s1, s2)); 
