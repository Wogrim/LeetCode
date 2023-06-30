/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length;
    const end = n - 1;

    let prev_i, prev_j, prev_val, curr_i, curr_j, curr_val;

    //for each location in the upper left quadrant
    //(for odd sizes, skip middle row or it will be rotated an extra time)
    for (let i = 0; i <= Math.floor(end / 2); i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            curr_i = i;
            curr_j = j;
            curr_val = matrix[curr_i][curr_j];
            //do 4 rotations
            for (let x = 0; x < 4; x++) {
                prev_i = curr_i;
                prev_j = curr_j;
                prev_val = curr_val;
                // clockwise rotation causes
                // i from 0 to end becomes j from end to 0
                // j from 0 to end becomes i from 0 to end
                curr_i = prev_j;
                curr_j = end - prev_i;
                curr_val = matrix[curr_i][curr_j];
                matrix[curr_i][curr_j] = prev_val;
            }
        }
    }

};