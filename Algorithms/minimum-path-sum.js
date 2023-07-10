/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    //classic dynamic programming problem
    //the lowest path to a square is its own value plus
    //    the lowest path to the square above or to the left

    //in-place

    //first row
    for (let j = 1; j < n; j++)
        grid[0][j] += grid[0][j - 1];

    //first column
    for (let i = 1; i < m; i++)
        grid[i][0] += grid[i - 1][0];

    //the rest of the grid
    for (let i = 1; i < m; i++)
        for (let j = 1; j < n; j++)
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);

    return grid[m - 1][n - 1];
};