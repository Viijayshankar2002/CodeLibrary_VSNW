function findDuplicate(nums) {
    let left = 1;
    let right = nums.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      let count = 0;
  
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= mid) {
          count++;
        }
      }
  
      if (count > mid) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  