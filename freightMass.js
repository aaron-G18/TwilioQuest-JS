calculateMass = (array) => {
    let totalLength = 0;
    array.forEach(element => {
        totalLength += (element.length);
    });
    return totalLength;
};