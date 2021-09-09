class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class MaxHeap {
    constructor() {
      this.value = [];
      this.min = Infinity;
    }
  
    add(val, priority) {
      
      if (!priority) {priority = val }

      this.value.push(new Node(val, priority));
      this.bubbleUp(this.value.length - 1);
      this.min = Math.min(this.min, val);
    }
  
    remove() {
      this.swap(0, this.value.length - 1);
      const max = this.value.pop();
      this.trickleDown(0);
      return max;
    }
  
    bubbleUp(idx) {
      const parent = Math.floor((idx - 1) / 2);
      let min = idx;
  
      if (parent >= 0 && this.value[parent].priority < this.value[min].priority) min = parent;
  
      if (min !== idx) {
        this.swap(min, idx);
        this.bubbleUp(min);
      }
    }
  
    trickleDown(idx) {
      const leftChild = 2 * idx + 1;
      const rightChild = 2 * idx + 2;
      let max = idx;
  
      if (leftChild < this.value.length && this.value[leftChild].priority > this.value[max].priority) max = leftChild;
      if (rightChild < this.value.length && this.value[rightChild].priority > this.value[max].priority) max = rightChild;
  
      if (max !== idx) {
        this.swap(max, idx);
        this.trickleDown(max);
      }
    }
  
    swap(i, j) {
      [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
    }
  }


module.exports = { MaxHeap }