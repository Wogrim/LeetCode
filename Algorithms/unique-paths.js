/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    //robot has to go down or right on any given move
    //a total of m-1 times down
    //and n-1 times right
    //solve by deciding either when to go down
    //or when to go right

    let t = m - 1 + n - 1;
    let k = Math.min(m, n) - 1;
    //we will calculate as t choose k
    //which is t! / ((t-k)!*k!)
    //which is t * t-1 * ... * m / (n-1 * n-2 * ... * 2 * 1)
    //if n < m, otherwise swap

    //early exit: one row and/or one column
    if (k === 0)
        return 1;

    let answer = 1;
    //multiply one term of numerator and 
    //divide one term of denominator at a time
    //to prevent overflow
    //there will be precision error to round at the end
    //unless you match terms to divide evenly
    while (k > 0) {
        answer *= t / k;
        t--;
        k--;
    }

    return Math.round(answer);
};