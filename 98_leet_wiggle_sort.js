function wiggleSort(nums) {
    let sorted = nums.slice().sort((a, b) => a - b);
    for (let i = 1; i < nums.length - 1; i += 2) {
        let temp = sorted[i];
        sorted[i] = sorted[i+1];
        sorted[i+1] = temp;
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = sorted[i];
    }
}
