/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let maxProduct = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num < 0) {
            [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
        }
        maxSoFar = Math.max(num, maxSoFar * num);
        minSoFar = Math.min(num, minSoFar * num);
        maxProduct = Math.max(maxProduct, maxSoFar);
    }
    
    return maxProduct;
};