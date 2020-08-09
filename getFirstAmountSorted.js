getFirstAmountSorted = (array, number) => {
    array.sort();
    let newArr = [];
    newArr = array.slice(0, number);
    return newArr;
};