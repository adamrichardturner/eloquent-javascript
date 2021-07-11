// Write a reverseArray function and reverseArrayInPlace. The first takes an array as arg
// and produces a new array with the same elements in reverse order. 
// Second does what reverse does but modifies the array given as an arg by reversing its 
// elements. Neither can use the standard reverse method.

const reverseArray = (arr) => {
    // We will store our reversed array here
    const reverse = [];
    // Initialised at end of arr, break at 0 index, decrement from the initialised value
    // (end of arr)
    for(let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}

const reverseArrayInPlace = (arr) => {
    // Takes array as arg, loops from end index decrementally 
    for(let i = arr.length - 1; i >= 0; i--) {
        // Push each element in reverse to the end of the array
        // e.g (3)21 = 123(3) on one iteration
        // Ends with a mutated array with the elements in reverse appended
        // to the end of the original array - creates duplicates in reverse
        arr.push(arr[i]);
    }
    // splice the array from 0 index to half of the double sized array to remove
    // the duplicates
    arr.splice(0, arr.length / 2)
    return arr;
}

console.log(reverseArray([1, 2, "hat", 6]));
console.log(reverseArrayInPlace([6, 'cat', 5, false]));