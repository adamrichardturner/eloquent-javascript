// Use the reduce method with the concat method to "flatten" an array of arrays
// into a single array that has all the elements of the original arrays.

const flatten = (arr) => {
    const dimensions = (arr) => {
        return arr.reduce((x, y) => Math.max(x, y.length), 0);
    }
    return dimensions;
}


const arr = [[1, 5, 7], [25, "cat", "dog"]];
console.log(flatten(arr));
