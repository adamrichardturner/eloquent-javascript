// Write a program that creates a string representing an 8x8 grid using
// new line characters to separate lines. At each position of the grid
// there is either a space of a # character. The characters form a
// chessboard.
// Extra: Make it so you can define the size of the chessboard grid

// Size can be changed to any value to create any equilateral sized grid (e.g. 2x2 not 2x3)
// It represents both the length / width of the chessboard grid.
let size = 8;
let end = size ** 2;
let hash = "#";
let space = " ";
let newLine = "\n";
let chessBoard = "";
let count = 0;

for(let i = 0; i < end; i++) {
    chessBoard += space;
    chessBoard += hash;
    count++;
    if(count % size === 0 ) {
        chessBoard += newLine;
    } 
}

console.log(chessBoard);