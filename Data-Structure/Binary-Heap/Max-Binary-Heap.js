class MaxBinaryHeap {
    constructor(val) {
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

