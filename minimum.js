// Write a function that takes two arguments and returns their minimum.
// E.G 2, 4 will return 2.

const minimum = (a, b) => {
    if(a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(minimum(5, 15));