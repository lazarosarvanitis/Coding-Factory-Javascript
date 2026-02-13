const products = [];

function insert(arr, product) {
    try {
        if(!Array.isArray(arr || (typeof product!== "string"))) {
            throw new illegalArgumentError("Expected an array and a string");
        }

        if (product.trim() === "") {
            throw new Error("Product cannot be an empty string");
        }

        // same with
        // if (!product.trim()) {
        //     throw new Error("Product cannot be an empty string");
        // }

        if (arr.includes(product)) {
            throw new ProductAllreadyExistsError(`Product "${product}" already exists in the array.`);
        }

        arr.push(product);
        console.log(`Product "${product}" inserted successfully.`);
    }
    catch (error) {
        console.error(`Insert failed: ${error.message}`);
        console.error(`$(error.code)`);
        throw error;
    }
}

try {
    insert(products, "Laptop");
} catch (error) {
    switch (error.code) {
        case "ILLEGAL_ARGUMENT":
            console.error("Please provide valid arguments.");
            break;
        case "PRODUCT_ALREADY_EXISTS":
            console.error("The product you are trying to insert already exists.");
            break;
        default:
            console.error("An unexpected error occurred.");
    }
}