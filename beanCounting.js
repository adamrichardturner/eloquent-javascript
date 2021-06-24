// Write a function that takes a string as its only arg and returns a 
// number that indicates how many uppercase "B" chars are in the string.
// Next write a function called countChar that behaves like countBs except
// it takes a second argument that indicates the character that is to be 
// counted (rather than counting only uppercaseBs). Re-write countBs to
// make use of this function.

const countBs = word => {
    let bCount = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "B") {
            bCount++;
        }
    }
    return bCount;
}

const countChar = (word, countChar) => {
    let counted = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === countChar) {
            counted++;
        }
    }
    return counted;
}

let a = "How many Big BeBauBtiful BeeHives are here?";

console.log(countBs(a))
console.log(countChar(a, "B"));