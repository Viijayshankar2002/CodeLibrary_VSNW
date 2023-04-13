function countSmaller(nums) {
    const n = nums.length;
    const res = new Array(n).fill(0);
    const indexes = new Array(n).fill(0).map((_, i) => i);
    const tmp = new Array(n).fill(0);
  
    const mergeSort = (start, end) => {
      if (start >= end) {
        return;
      }
  
      const mid = Math.floor((start + end) / 2);
      mergeSort(start, mid);
      mergeSort(mid + 1, end);
  
      let i = start;
      let j = mid + 1;
      let k = 0;
      while (i <= mid && j <= end) {
        if (nums[indexes[i]] <= nums[indexes[j]]) {
          res[indexes[i]] += j - mid - 1;
          tmp[k++] = indexes[i++];
        } else {
          tmp[k++] = indexes[j++];
        }
      }
  
      while (i <= mid) {
        res[indexes[i]] += j - mid - 1;
        tmp[k++] = indexes[i++];
      }
  
      while (j <= end) {
        tmp[k++] = indexes[j++];
      }
  
      for (let i = start; i <= end; i++) {
        indexes[i] = tmp[i - start];
      }
    }
  
    mergeSort(0, n - 1);
  
    return res;
  }
  