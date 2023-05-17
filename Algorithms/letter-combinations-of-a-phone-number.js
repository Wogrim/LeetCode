const letters = [
    [],
    [],
    ['a', 'b', 'c'],      //2
    ['d', 'e', 'f'],      //3
    ['g', 'h', 'i'],      //4
    ['j', 'k', 'l'],      //5
    ['m', 'n', 'o'],      //6
    ['p', 'q', 'r', 's'], //7
    ['t', 'u', 'v'],      //8
    ['w', 'x', 'y', 'z'], //9
]

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    //early exit if no digits; empty string is falsy
    if (!digits)
        return [];

    let results = [""];

    //for each digit
    for (let digit of digits) {
        digit = parseInt(digit);
        let temp = [];

        //for each result
        for (let result of results) {
            //for each letter corresponding to the digit
            for (let letter of letters[digit]) {
                //add the letter to result and add to temp
                temp.push(result + letter);
            }
        }

        //replace results with temp
        results = temp;
    }

    return results;
};