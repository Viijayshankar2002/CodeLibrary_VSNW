class PeekingIterator {
    constructor(iterator) {
      this.iterator = iterator;
      this.nextVal = iterator.next();
    }
  
    peek() {
      return this.nextVal.value;
    }
  
    next() {
      const val = this.nextVal.value;
      this.nextVal = this.iterator.next();
      return val;
    }
  
    hasNext() {
      return !this.nextVal.done;
    }
  }