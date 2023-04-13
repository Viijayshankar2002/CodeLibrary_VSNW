class NumArray {
    constructor(nums) {
      this.nums = nums;
      this.tree = new Array(nums.length * 4);
      this.buildTree(0, 0, nums.length - 1);
    }
  
    buildTree(node, start, end) {
      if (start === end) {
        this.tree[node] = this.nums[start];
        return;
      }
  
      const mid = Math.floor((start + end) / 2);
      this.buildTree(node * 2 + 1, start, mid);
      this.buildTree(node * 2 + 2, mid + 1, end);
  
      this.tree[node] = this.tree[node * 2 + 1] + this.tree[node * 2 + 2];
    }
  
    update(index, val) {
      this.updateTree(0, 0, this.nums.length - 1, index, val);
      this.nums[index] = val;
    }
  
    updateTree(node, start, end, index, val) {
      if (start === end) {
        this.tree[node] = val;
        return;
      }
  
      const mid = Math.floor((start + end) / 2);
      if (index <= mid) {
        this.updateTree(node * 2 + 1, start, mid, index, val);
      } else {
        this.updateTree(node * 2 + 2, mid + 1, end, index, val);
      }
  
      this.tree[node] = this.tree[node * 2 + 1] + this.tree[node * 2 + 2];
    }
  
    sumRange(left, right) {
      return this.queryTree(0, 0, this.nums.length - 1, left, right);
    }
  
    queryTree(node, start, end, left, right) {
      if (right < start || end < left) {
        return 0;
      }
  
      if (left <= start && end <= right) {
        return this.tree[node];
      }
  
      const mid = Math.floor((start + end) / 2);
      const sumLeft = this.queryTree(node * 2 + 1, start, mid, left, right);
      const sumRight = this.queryTree(node * 2 + 2, mid + 1, end, left, right);
  
      return sumLeft + sumRight;
    }
  }
  