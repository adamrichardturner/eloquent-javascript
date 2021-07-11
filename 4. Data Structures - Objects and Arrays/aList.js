/*
Objects as generic blobs of values can be used to build all 
sorts of data structures. A common data structure is a list
A list is a nested set of objects, with the first object
holding a reference to the second, the second to the third
and so on.
*/

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

// Write a function arrayToList that builds up a list structure
// like the one shown when given [1, 2, 3] as argument. Also write
// listToArray function that produces an array from a list. 

// Then add a helper function, prepend, which takes a list and a number
// and returns the element at the given position in the list (zero indexed)
// or undefined when no such element exists. 
const testArr = [1, 2, 3];

const arrayToList = arr => {
    let obj = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        obj = {
            value: arr[i],
            rest: obj
        };
    }
    return obj;
};

const listToArray = list => {
    let arr = [];
    // Loop through each element in obj
    // if the element is another obj 
    // push a recursive call to that element
    for (let i in list) {
        if (typeof list[i] === 'object') {
            // This pushes the most nested element in the 
            // object to the array.
            arr.push(listToArray(list[i]));
        } else {
            // this pushes values to the array that are not
            // identified as objects in the above if statement
            arr.push(list[i]);
        }
    }
    // flatten the nested array
    return arr.flat();
};

console.log(listToArray(list));