const removeFromArray = function(array,...args) {
    let filteredArray = array;
    filteredArray = filteredArray.filter(item => !args.includes(item));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
