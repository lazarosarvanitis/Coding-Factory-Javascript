function createCounter() {
    let count = 0; // This variable is private to the closure
    return function() {
        count++;
        return count; // The inner function has access to the outer variable 'count'
    };
}

const counter1 = createCounter(); // counter1 is a closure that has access to the 'count' variable
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3
// Each call to counter1() increments and returns the count, demonstrating that the inner function retains access to the outer variable 'count' even after createCounter() has finished executing.

// Another example of closure using classes and private fields:

class Counter {
    #count = 0; // Private field
    increment() {
        this.#count++;
        return this.#count;
    }
}

const counter2 = new Counter();
console.log(counter2.increment()); // Output: 1
console.log(counter2.increment()); // Output: 2
console.log(counter2.increment()); // Output: 3
// The Counter class uses a private field to maintain the count, and the increment method allows us to modify and access that count. This is an alternative way to achieve encapsulation without using closures.