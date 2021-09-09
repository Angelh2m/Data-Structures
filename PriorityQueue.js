
 class Point {
    constructor(point) {
        this.point = point;
    }
    
    get dist() {
        const [x, y] = this.point;
        return (x**2 + y**2)
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(point) {
        const pt = new Point(point);
        this.values.push(pt);
        this.bubbleUp(this.values.length - 1);
    }

    dequeue() {
        this.swap(0, this.values.length - 1);
        const highPriority = this.values.pop();
        this.trickleDown(0)
        return highPriority.point;
    }

    trickleDown(idx) {
        const leftChild = (2 * idx) + 1;
        const rightChild = (2 * idx) + 2;
        let min = idx;

        if (leftChild < this.values.length && this.values[leftChild].dist < this.values[min].dist) min = leftChild;
        if (rightChild < this.values.length && this.values[rightChild].dist < this.values[min].dist) min = rightChild;

        if (min !== idx) {
            this.swap(idx, min);
            this.trickleDown(min);
        }
    }

    bubbleUp(idx) {
        const parent = Math.floor((idx - 1) / 2);
        let max = idx;
        if (parent < 0) return;

        if (this.values[parent].dist > this.values[max].dist) max = parent;

        if (max !== idx) {
            this.swap(idx, max);
            this.bubbleUp(max);
        }
    }

    swap(i, j) {
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }
}