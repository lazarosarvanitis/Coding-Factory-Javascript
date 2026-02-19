const person = {
    fistname: "Alice",
    lastname: "Smith",
    age: 30
};

// Destructuring assignment
const { fistname, lastname, age: aliceAge } = person; // can pick less properties if needed, for example: const { fistname, age } = person;