/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = new Array(n+1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (const word of wordDict) {
            const len = word.length;
            if (len <= i && s.slice(i-len, i) === word && dp[i-len]) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
};