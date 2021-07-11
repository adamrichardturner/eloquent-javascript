// Write a higher order function loop that provides
// something like a for loop statement. It takes a value
// a test function, and an update function and a body function.

const loop = (value, test, update, body) => {
    if(test(value)) {
        body(value);
    } else {
        return;
    }
    return loop(update(value), test, update, body);
}

loop(3, n => n > 0, n => n - 1, console.log);