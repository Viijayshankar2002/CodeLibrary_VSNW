/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    const leftCandies = new Array(n).fill(1);
    const rightCandies = new Array(n).fill(1);
    let totalCandies = 0;
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            leftCandies[i] = leftCandies[i - 1] + 1;
        }
    }
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            rightCandies[i] = rightCandies[i + 1] + 1;
        }
    }
    for (let i = 0; i < n; i++) {
        totalCandies += Math.max(leftCandies[i], rightCandies[i]);
    }
    return totalCandies;
};