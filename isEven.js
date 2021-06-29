// Define a recursive function isEven corresponding to this description:
// 1. Zero is even.
// 2. One is odd.
// 3. For any other number N, its evenness is the same as N - 2
// Function should accept a single parameter, a positive whole number 
// and return a Boolean value

const isEven = num => {
    if(num < 0) {
        return false;
    } else if(num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(-4));