function moveZeroes(nums) {
    let left = 0;
    let right = 0;
  
    while (right < nums.length) {
      if (nums[right] !== 0) {
        // Swap non-zero element to the left
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
      }
      right++;
    }
  
    // Fill remaining part of the array with zeros
    for (let i = left; i < nums.length; i++) {
      nums[i] = 0;
    }
  }


  let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);