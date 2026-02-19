class Counter {

    constructor() {
        this._count = 0; // covention: _count is private by convention
    }

    increment() {
        this._count++;
        return this._count;
    }

    getCount() {
        return this._count;
    }
}

const counter1 = new Counter();
console.log(counter1._count); // Output: 0 
console.log(counter1.increment()); // Output: 1
console.log(counter1.increment()); // Output: 2
console.log(counter1.increment()); // Output: 3
console.log(counter1.getCount()); // Output: 3