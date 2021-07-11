// Use the reduce method with the concat method to "flatten" an array of arrays
// into a single array that has all the elements of the original arrays.

const flatten = (arr) => {
    // Multidimensional array with reduce.
    // Accumulator concatenates the currentValue
    // Returning a flattened single array with all elements of the 
    // multidimensional array
    return arr.reduce((x, y) => x.concat(y));
}

const arr = [[1, 5, 7], [25, "cat", "dog"]];

console.log(flatten(arr));

// Returns [ 1, 5, 7, 25, 'cat', 'dog' ]
