// Use console.log to print all the numbers from 1 to 100 with
// two exceptions. Numbers divisible by 3 print "Fizz" and numbers
// divisible by 5 print "Buzz". If they are divisible by both
// print "FizzBuzz"

let count = 1;

while (count <= 100) {
    if(count % 15 === 0) {
        console.log("FizzBuzz");
    } else if (count % 3 === 0) {
        console.log("Fizz");
    } else if (count % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(count);
    }
    count++;
}

/* Output

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...(truncated)

*/