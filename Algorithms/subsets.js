/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const n = nums.length;
    // constraint: all numbers unique

    // total number of answers is 2^n
    const count = 2 ** n;

    // create empty answers arrays
    let answers = [];
    for (let i = count; i > 0; i--)
        answers.push([]);

    // we will add the first number to every other array
    // the second number to 2 of every 4 arrays
    // the third number to 4 of every 8 arrays
    // and so on....

    let freq = 1;
    let jump;
    // loop through each number
    for (const num of nums) {
        jump = 2 * freq;
        // loop through starting 'on' locations for this num
        // the num is 'off' for the first freq arrays, then 'on' for the next
        for (let i = 0; i < count; i += jump) {
            for (let j = freq; j < jump; j++) {
                answers[i + j].push(num)
            }
        }
        // update freq for next number
        freq = jump;
    }

    return answers;
};