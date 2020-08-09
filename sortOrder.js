let firstArg = (process.argv[2]).toLowerCase();
let secondArg = (process.argv[3]).toLowerCase();

if (firstArg < secondArg) {
    console.log(-1)
} else if (firstArg > secondArg) {
    console.log(1)
} else {
    console.log(0)
};