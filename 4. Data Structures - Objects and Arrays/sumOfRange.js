// Write a range function that takes two args, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
// Then write a sum function that takes an array of numbers and returns the 
// sum of these numbers. 
// Bonus: Modify your range function to take a step value used when building
// the array. If no step is given, the elements go up by increments of one,
// corresponding to the old behaviour. 

const range = (start, end, step = 1) => {
    // Defines a range array we will push iterated values to from start to end.
    let range = [];
    // Loop with innt variable at start and finish <= end, the conditionals
    // ensure the iteration occurs with a step value if present, including negative
    // values for descending ranges. 
    // Add each number to the array
    if (step < 0) {
        for(let i = start; i >= end; i--) {
            range.push(i);
        }
    } else if (step > 0) {
        for(let i = start; i <= end; i += step) {
            range.push(i);
        }
    } else {
        for(let i = start; i <= end; i++) {
            range.push(i);
        }
    }
    // Returns the iterated numbers in order from start to end in a new array
    return range;
}

// sum takes an array of numbers and computes their total.
const sum = (nums) => {
    // Store the sum initialised as 0 
    let sum = 0;
    // Iterate from index 0 to final array num value
    for(let i = 0; i < nums.length; i++) {
        // Add each value to sum
        sum += nums[i];
    }
    return sum;
}

console.log(`Range with default value of 1 to 10: ${range(1, 10, 2)}`);

console.log(sum([1, 2, 3, 5]));