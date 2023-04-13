function hIndex(citations) {
    let n = citations.length;
    let lo = 0, hi = n - 1;
    
    while (lo <= hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (citations[mid] >= n - mid) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    
    return n - lo;
  }