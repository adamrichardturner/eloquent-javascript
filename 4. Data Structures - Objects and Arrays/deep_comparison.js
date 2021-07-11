// Write a function that takes two values and returns true only if
// they are the same value or are objects with the same props, where
// the values of hte props are equal when compared with a recursive
// call to deepEqual.

const deepEqual = (value1, value2) => {
    // Sanitise for null values
    if (typeof value1 === typeof value2) {
        if (value1 === null) {
            return true;
        } else {
            // Convert objects into arrays with
            // nested objects of key / value pairs
            let arr1 = Object.entries(value1);
            let arr2 = Object.entries(value2);

            // Loop through each array recursively
            // to find the entries for the most nested
            // obj
            const objectNest = arr => {
                let arrNew = [];
                let nest = 1;
                if (typeof arr === "object") {
                    for (let i in arr) {
                        if (typeof arr[i] === "object") {
                            nest++;
                            arrNew.push(objectNest(arr[i]));
                        } else {
                            arrNew.push(arr[i]);
                        }
                    }
                }
                return arrNew.flat(nest);
            };
            // Now compare the two flattened arrays for the same
            // values, loop through both flattened arrays, if the 
            // values are not the same, iterate fal (a falsy condition)
            let arr3 = objectNest(arr1);
            let arr4 = objectNest(arr2);
            let tru = 0;
            let fal = 0;
            for (let i = 0; i <= arr3.length; i++) {
                if (arr3[i] === arr4[i]) {
                    tru++;
                } else {
                    fal++;
                }
            }
            if (fal > 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}
// Test Conditions

let value1 = [1, 4, 7, 'hello'];

let value2 = [1, 4, 7, 'hello'];

let str = "Banans";

let str1 = "Bananas";

let obj1 = {
    name: 'Andy',
    age: 36,
    rest: {
        name: 'Jenny',
        age: 42,
        rest: {
            name: "John",
            age: 56,
            rest: null
        }
    }
};

let obj2 = {
    name: 'Andy',
    age: 36,
    rest: {
        name: 'Jenny',
        age: 42,
        rest: {
            name: "John",
            age: 56,
            rest: null
        }
    }
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(str, str1)); // false
console.log(deepEqual(null, null)); // true