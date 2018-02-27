export const isEmptyObject = function (obj) {
    return Object.keys(obj).length == 0;
};
export const objectLength = function (obj) {
    return Object.keys(obj).length;
};
export const getObjectValueToArray = function (obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
};