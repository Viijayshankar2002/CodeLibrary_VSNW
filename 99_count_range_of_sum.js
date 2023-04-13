function countRangeSum(nums, lower, upper) {
    let count = 0;
    let sums = [0];
    for (let i = 0; i < nums.length; i++) {
        sums.push(sums[sums.length-1] + nums[i]);
    }
    for (let i = 0; i < sums.length-1; i++) {
        for (let j = i+1; j < sums.length; j++) {
            let sum = sums[j] - sums[i];
            if (sum >= lower && sum <= upper) {
                count++;
            }
        }
    }
    return count;
}
