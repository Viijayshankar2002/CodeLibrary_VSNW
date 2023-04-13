function hIndex(citations) {
    const n = citations.length;
    citations.sort((a, b) => b - a); // sort in descending order
    for (let i = 0; i < n; i++) {
      if (citations[i] < i + 1) {
        return i; // h-index is i
      }
    }
    return n; // h-index is n
  }