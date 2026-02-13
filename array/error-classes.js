class ProductAllreadyExistsError extends Error {
    constructor(message) {
        super(message)
        this.code = "PRODUCT_ALREADY_EXISTS";
    }
}

class ProductNotFoundError extends Error {
    constructor(message) {
        super(message)
        this.code = "PRODUCT_NOT_FOUND";
    }
}

class illegalArgumentError extends Error {
    constructor(message) {
        super(message)
        this.code = "ILLEGAL_ARGUMENT";
    }
}
