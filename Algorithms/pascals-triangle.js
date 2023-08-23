/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let answers = [[1]];

    for (let row = 1; row < numRows; row++) {
        let prev = answers[row - 1];
        let current = [1];
        for (let i = 0; i < prev.length - 1; i++)
            current.push(prev[i] + prev[i + 1]);
        current.push(1);
        answers.push(current);
    }

    return answers;
};