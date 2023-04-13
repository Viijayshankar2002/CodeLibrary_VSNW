function maxNumber(nums1, nums2, k) {
    const m = nums1.length;
    const n = nums2.length;
    const ans = new Array(k).fill(0);
  
    for (let i = Math.max(0, k - n); i <= Math.min(k, m); i++) {
      const left = findMaxDigits(nums1, i);
      const right = findMaxDigits(nums2, k - i);
      const curr = mergeDigits(left, right);
      if (compareDigits(curr, 0, ans, 0) > 0) {
        for (let j = 0; j < k; j++) {
          ans[j] = curr[j];
        }
      }
    }
  
    return ans;
  }
  
  function findMaxDigits(nums, k) {
    const n = nums.length;
    const stack = [];
    let popCount = n - k;
  
    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && nums[i] > stack[stack.length - 1] && popCount > 0) {
        stack.pop();
        popCount--;
      }
      stack.push(nums[i]);
    }
  
    return stack.slice(0, k);
  }
  
  function mergeDigits(left, right) {
    const m = left.length;
    const n = right.length;
    const ans = new Array(m + n).fill(0);
    let i = 0;
    let j = 0;
    let idx = 0;
  
    while (i < m && j < n) {
      if (compareDigits(left, i, right, j) > 0) {
        ans[idx++] = left[i++];
      } else {
        ans[idx++] = right[j++];
      }
    }
  
    while (i < m) {
      ans[idx++] = left[i++];
    }
  
    while (j < n) {
      ans[idx++] = right[j++];
    }
  
    return ans;
  }
  
  function compareDigits(nums1, i, nums2, j) {
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] !== nums2[j]) {
        return nums1[i] - nums2[j];
      }
      i++;
      j++;
    }
    return (nums1.length - i) - (nums2.length - j);
  }
  