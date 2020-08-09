addFirstToLast = (stringArr) => {
    let result = "";
    if (stringArr.length > 0) {
        result = (stringArr[0] + stringArr[stringArr.length - 1]);
    };
    return result;
};