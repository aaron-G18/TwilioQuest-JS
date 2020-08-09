let int = process.argv[2];

if (int % 15 === 0) {
    console.log("JavaScript")
} else if (int % 3 === 0) {
    console.log("Java")
} else if (int % 5 === 0) {
    console.log("Script")
} else {
    console.log(int)
};