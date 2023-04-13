class MedianFinder {
    constructor() {
      this.minHeap = new PriorityQueue();
      this.maxHeap = new PriorityQueue({ compare: (a, b) => b - a });
    }
  
    addNum(num) {
      if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
        this.maxHeap.enqueue(num);
      } else {
        this.minHeap.enqueue(num);
      }
  
      if (this.maxHeap.size() - this.minHeap.size() > 1) {
        this.minHeap.enqueue(this.maxHeap.dequeue());
      } else if (this.minHeap.size() - this.maxHeap.size() > 1) {
        this.maxHeap.enqueue(this.minHeap.dequeue());
      }
    }
  
    findMedian() {
      if (this.maxHeap.size() > this.minHeap.size()) {
        return this.maxHeap.peek();
      } else if (this.minHeap.size() > this.maxHeap.size()) {
        return this.minHeap.peek();
      } else {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
      }
    }
  }
  
  class PriorityQueue {
    constructor({ compare = (a, b) => a - b } = {}) {
      this.heap = [];
      this.compare = compare;
    }
  
    enqueue(item) {
      this.heap.push(item);
      this.bubbleUp(this.heap.length - 1);
    }
  
    dequeue() {
      const root = this.heap[0];
      const lastItem = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastItem;
        this.bubbleDown(0);
      }
  
      return root;
    }
  
    peek() {
      return this.heap[0];
    }
  
    size() {
      return this.heap.length;
    }
  
    bubbleUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
  
        if (this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
          const tmp = this.heap[index];
          this.heap[index] = this.heap[parentIndex];
          this.heap[parentIndex] = tmp;
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    bubbleDown(index) {
      while (index < this.heap.length) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallerChildIndex = null;
  
        if (leftChildIndex < this.heap.length) {
          smallerChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length &&
            this.compare(this.heap[rightChildIndex], this.heap[leftChildIndex]) < 0) {
          smallerChildIndex = rightChildIndex;
        }
  
        if (smallerChildIndex === null) {
          break;
        }
  
        if (this.compare(this.heap[smallerChildIndex], this.heap[index]) < 0) {
          const tmp = this.heap[index];
          this.heap[index] = this.heap[smallerChildIndex];
          this.heap[smallerChildIndex] = tmp;
          index = smallerChildIndex;
        } else {
          break;
        }
      }
    }
  }
  