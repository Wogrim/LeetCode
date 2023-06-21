/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    //convert board to nums, with 0 = unfilled
    let nums = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = parseInt(board[i][j]);
            nums[i][j] = num ? num : 0;
        }
    }

    //get counts of numbers from each row and see if too many of any number
    for (let i = 0; i < 9; i++) {
        let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let j = 0; j < 9; j++) {
            const num = nums[i][j];
            if (num > 0 && counts[num] > 0)
                return false;
            else
                counts[num]++;
        }
    }

    //get counts of numbers from each column and see if too many of any number
    for (let j = 0; j < 9; j++) {
        let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < 9; i++) {
            const num = nums[i][j];
            if (num > 0 && counts[num] > 0)
                return false;
            else
                counts[num]++;
        }
    }

    //get counts of numbers from each 3x3 and see if too many of any number
    for (let istart = 0; istart < 9; istart += 3) {
        for (let jstart = 0; jstart < 9; jstart += 3) {
            let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let i = istart; i < istart + 3; i++) {
                for (let j = jstart; j < jstart + 3; j++) {
                    const num = nums[i][j];
                    if (num > 0 && counts[num] > 0)
                        return false;
                    else
                        counts[num]++;
                }
            }
        }
    }

    //no problems
    return true;
};