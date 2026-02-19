// 1. Basic Function Syntax
function sayHello(name) {
    return `Hello, ${name}!`;
}

console.log(sayHello("Alice")); // Output: Hello, Alice!

// 2. Function Expression

const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3)); // Output: 8

// 3. Arrow Function

const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); // Output: 24

// 4. Optional Parameters

function sayHi(name) {
    if (!name) {
        name = "Guest";
    }
    console.log(`Hi, ${name}!`);
}

sayHi(); // Output: Hi, Guest!

// 5. Default Parameters, Overloading

function sayHi2(name = "Guest") {
    console.log(`Hi, ${name}!`);
}

sayHi2(); // Output: Hi, Guest!
sayHi2("Bob"); // Output: Hi, Bob!

function addUser(name = "Unknown", age = 18, isAdmin = false) {
    return {name, age, isAdmin};
}
console.log(addUser()); // Output: { name: 'Unknown', age: 18, isAdmin: false }

// 6. Rest Parameters

function max(...numbers) {
    // for (const num of numbers) {
    //     console.log(num);
    // } not needed, we can directly use the spread operator with Math.max
    return Math.max(...numbers);
}

console.log(max(1, 5, 3, 9)); // Output: 9