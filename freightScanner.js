scan = (array) => {
    let totalCount = 0;
    array.forEach(element => {
        if (element === "contraband") {
            totalCount++;
        };
    });
    return totalCount;
};