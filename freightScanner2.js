scan = (array) => {
    let outputArr = [];
    array.forEach(function (element, index) {
        if (element === "contraband") {
            outputArr.push(index);
        };
    });
    return outputArr;
};