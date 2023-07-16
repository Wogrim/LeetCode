/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    //find rows and columns to zero out, as a set to avoid duplicates
    let rows = {};
    let columns = {};
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = true;
                columns[j] = true;
            }
        }
    }

    //zero out those rows
    for (const row in rows) {
        for (let j = 0; j < n; j++)
            matrix[row][j] = 0;
    }

    //zero out those columns
    for (const column in columns) {
        for (let i = 0; i < m; i++)
            matrix[i][column] = 0;
    }

    return;
};