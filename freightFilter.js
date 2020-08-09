scanAndFilter = (array, string) => {
    let filteredArr = [];
    array.filter((function (element) {
        if (element !== string) {
            filteredArr.push(element);
        }
    }));
    console.log(filteredArr);
    return (filteredArr);
};