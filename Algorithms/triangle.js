/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const n = triangle.length;

    //dynamic programming but only keeping track of one row
    //and modifying in place
    let subtotals = [triangle[0][0]];

    // loop through rows of triangle updating subtotals
    for (let i = 1; i < n; i++) {
        //last item only has 1 parent
        subtotals[i] = subtotals[i - 1] + triangle[i][i];

        //loop through middle items of triangle
        for (let j = i - 1; j > 0; j--) {
            subtotals[j] = Math.min(subtotals[j], subtotals[j - 1]) +
                triangle[i][j];
        }

        //first item has only 1 parent
        subtotals[0] += triangle[i][0];
    }

    //find smallest subtotal
    let min = subtotals[0];
    for (let subtotal of subtotals)
        if (subtotal < min)
            min = subtotal;

    return min;
};