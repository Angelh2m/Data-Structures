class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class MinHeap {
        
    constructor(capacity) {
        this.capacity = capacity;
        this.value = [];
    }
    
    add(val, priority) {
        
        if (!priority) {priority = val }

        this.value.push(new Node(val, priority));
        this.bubbleUp(this.value.length-1);
        if(this.value.length > this.capacity) this.remove();
    }
    
    remove() {
        this.swap(0, this.value.length-1);
        const min = this.value.pop();
        this.trickleDown(0);
        return min;
    }
    
    bubbleUp(idx) {
        const parent = Math.floor((idx-1)/2);
        let max = idx;
        
        if(parent >= 0 && this.value[parent].priority > this.value[max].priority) max = parent;
        
        if(max !== idx) {
            this.swap(max, idx);
            this.bubbleUp(max);
        }
    }
    
    trickleDown(idx) {
        const leftChild = 2 * idx + 1;
        const rightChild = 2 * idx + 2;
        let min = idx;
        
        if(leftChild < this.value.length && this.value[leftChild].priority < this.value[min].priority) min = leftChild;
        if(rightChild < this.value.length && this.value[rightChild].priority < this.value[min].priority) min = rightChild;
        
        if(min !== idx) {
            this.swap(min, idx);
            this.trickleDown(min);
        }
    }
    
    swap(i, j) {
        [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
    }
}


module.exports = { MinHeap }