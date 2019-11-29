class Iterator {
    constructor(list) {
        this.list = list;
        this.index = -1;
    }
    next() {
        if (this.hasNext()) {
            return this.list[++index];
        }
        return null;
    }
    hasNext() {
        return this.index >= this.list.length;
    }
}

const arr = [1, 2, 3, 4, 5];
new Iterator(arr);
