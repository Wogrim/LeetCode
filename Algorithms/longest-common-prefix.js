/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    //early exit if there is only 1 string
    const n = strs.length;
    if (n === 1)
        return strs[0];

    let length = 0;
    //loop through characters in first string
    const n0 = strs[0].length;
    while (length < n0) {
        let c = strs[0][length];

        //check if any of the other strings don't match it
        for (let i = 1; i < n; i++) {
            if (strs[i][length] !== c) {
                return strs[i].substring(0, length);
            }
        }

        length++;
    }

    //all match the entire first string
    return strs[0];
};