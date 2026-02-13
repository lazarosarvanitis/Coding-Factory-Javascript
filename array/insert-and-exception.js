const products = [];

function insert(arr, product) {
    try {
        if(!Array.isArray(arr)) {
            throw new TypeError("Expected an array");
        }

        if (typeof product !== "string") {
            throw new TypeError("Product must be a string");
        }

        if (product.trim() === "") {
            throw new Error("Product cannot be an empty string");
        }

        // same with
        // if (!product.trim()) {
        //     throw new Error("Product cannot be an empty string");
        // }

        if (arr.includes(product)) {
            throw new Error(`Product "${product}" already exists in the array`);
        }

        arr.push(product);
        console.log(`Product "${product}" inserted successfully.`);
    }
    catch (error) {
        console.error(`Insert failed: ${error.message}`);
        throw error;
    }
}

insert(products, "Laptop");
insert(products, "Smartphone");
insert(products, "Keyboard");
insert(products, "Laptop"); // This will throw an error

console.log(products);