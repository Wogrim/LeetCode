/**
 * helper function: convert positions to output format (array of strings)
 * 
 * @param {number[]} positions
 * @return {string[]}
 */
var current_solution = function (positions) {
    const n = positions.length;
    let solution = [];
    for (let i = 0; i < n; i++) {
        let column = "";
        for (let j = 0; j < n; j++)
            column += j === positions[i] ? 'Q' : '.';
        solution.push(column);
    }
    return solution;
};

// [0,0],[0,1],[0,2],[0,3]
// [1,0],[1,1],[1,2],[1,3]
// [2,0],[2,1],[2,2],[2,3]
// [3,0],[3,1],[3,2],[3,3]

/**
 * helper function: calculate diagonal_a for a certain position
 * 
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var calc_diagonal_a = function (r, c) {
    return r + c;
};

/**
 * helper function: calculate diagonal_b for a certain position
 * 
 * @param {number} r
 * @param {number} c
 * @param {number} n
 * @return {number}
 */
var calc_diagonal_b = function (r, c, n) {
    return r - c + n - 1;
};

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    //easy cases
    if (n === 1)
        return [["Q"]];
    else if (n === 2 || n === 3)
        return [];

    //answers will be put here
    let solutions = [];

    //areas being covered by queens (queens placed in separate columns)
    let rows = Array(n).fill(false);
    let diagonal_a = Array(2 * n - 1).fill(false);
    let diagonal_b = Array(2 * n - 2).fill(false);

    //queen positions
    let positions = Array(n).fill(0);

    //place queens with a backtracking loop
    let current_column = 0;
    let current_row = 0;
    let da, db;
    while (true) {
        //backtracking condition: went through all rows for this column
        if (current_row === n) {
            //if first column, we are done
            if (current_column === 0)
                break;
            //else go back to previous column; 
            //undo its position and try next row
            current_column--;
            current_row = positions[current_column];
            rows[current_row] = false;
            diagonal_a[calc_diagonal_a(current_row, current_column)] = false;
            diagonal_b[calc_diagonal_b(current_row, current_column, n)] = false;
            current_row++;
            continue;
        }
        da = calc_diagonal_a(current_row, current_column);
        db = calc_diagonal_b(current_row, current_column, n);
        //if you can place current queen(column) in current_row
        if (!rows[current_row] &&
            !diagonal_a[da] &&
            !diagonal_b[db]) {
            //place the queen
            positions[current_column] = current_row;
            //if this is the last column add solution then try next row
            if (current_column === n - 1) {
                solutions.push(current_solution(positions));
                current_row++;
                continue;
            }
            //else mark row and diagonals and move on to next column
            rows[current_row] = true;
            diagonal_a[da] = true;
            diagonal_b[db] = true;
            current_column++;
            current_row = 0;
            continue;
        }
        else {
            //can't place the queen here, try next row
            current_row++;
            continue;
        }
    }

    //return the solutions
    return solutions;
};