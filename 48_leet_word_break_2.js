/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const wordSet = new Set(wordDict);
    const results = [];

    function backtrack(start, words) {
        if (start === n) {
            results.push(words.join(' '));
            return;
        }

        for (let i = start; i < n; i++) {
            const prefix = s.slice(start, i+1);
            if (wordSet.has(prefix)) {
                words.push(prefix);
                backtrack(i+1, words);
                words.pop();
            }
        }
    }

    backtrack(0, []);

    return results;
};