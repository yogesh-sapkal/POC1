function flattenArray(inputArray) {
    var result = [];
    for(var i = 0; i < inputArray.length; i++) {
        if(Array.isArray(inputArray[i])) {
            result = result.concat(flattenArray(inputArray[i]));
        } else {
            result.push(inputArray[i]);
        }
    }
    return result;
}
