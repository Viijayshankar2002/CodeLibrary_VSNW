/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }
    

    let rightmostSetBit = 1;
    while ((rightmostSetBit & xor) === 0) {
        rightmostSetBit <<= 1;
    }
    

    let group1 = 0, group2 = 0;
    for (let num of nums) {
        if ((num & rightmostSetBit) === 0) {
            group1 ^= num;
        } else {
            group2 ^= num;
        }
    }
    

    return [group1, group2];
};