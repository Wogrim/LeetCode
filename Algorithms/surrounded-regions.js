/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const m = board.length;
    const n = board[0].length;

    //edge case: everything is on the edge of the board
    if (m <= 2 || n <= 2)
        return;

    //helper function
    const is_edge = function (i, j) {
        return i === 0 || i === m - 1 || j === 0 || j === n - 1;
    };

    //recursive function to mark O in middle of the board
    const recurse = function (i, j) {
        if (!is_edge(i, j) && board[i][j] === 'O') {
            board[i][j] = 'o';
            recurse(i, j + 1);
            recurse(i, j - 1);
            recurse(i + 1, j);
            recurse(i - 1, j);
        }
    };

    //recurse from square below top row if it is an O
    for (let j = n - 2; j > 0; j--)
        if (board[0][j] === 'O')
            recurse(1, j);

    //recurse from square above bottom row if it is an O
    for (let j = n - 2; j > 0; j--)
        if (board[m - 1][j] === 'O')
            recurse(m - 2, j);

    //recurse from square right of left column if it is an O
    for (let i = m - 2; i > 0; i--)
        if (board[i][0] === 'O')
            recurse(i, 1);

    //recurse from square right of left column if it is an O
    for (let i = m - 2; i > 0; i--)
        if (board[i][n - 1] === 'O')
            recurse(i, n - 2);

    //go through the middle of the board changing O to X and o to O
    for (let i = m - 2; i > 0; i--) {
        for (let j = n - 2; j > 0; j--) {
            if (board[i][j] === 'O')
                board[i][j] = 'X';
            else if (board[i][j] === 'o')
                board[i][j] = 'O';
        }
    }
};