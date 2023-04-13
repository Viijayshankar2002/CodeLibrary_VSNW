function missingNumber(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}