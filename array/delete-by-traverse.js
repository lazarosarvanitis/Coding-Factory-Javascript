const arr = [10, 2, 9 ,2 , 3, 4, 2];

const deleteBackwards = (arr, value) => {
    let i = arr.length;

    while (i--) {          // post-decrement, so it starts at arr.length - 1
        if (arr[i] === value) {
            arr.splice(i, 1);
        }
    }
}

// OR

const deleteBackwards2 = (arr, value) => {
    for (let i = arr.length - 1; i >= 0; i--) { // pre-decrement, so it starts at arr.length - 1
        if (arr[i] === value) {
            arr.splice(i, 1);
        }
    }
}

// NEW ARRAY

const deleteImmutable = (arr, value) => {
    return arr.filter(x => x !== value);
}