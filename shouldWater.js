let lifeStatus = Number(process.argv[2]);
let dryness = process.argv[3];

if (lifeStatus === 0 && dryness > 10) {
    console.log("WATER");
};