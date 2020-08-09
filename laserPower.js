calculatePower = (array) => {
    let total = 0;
    adjustedArr = array.map(function (x) {
        x = (x * 2);
        total += x;
    });
    return (total);
};