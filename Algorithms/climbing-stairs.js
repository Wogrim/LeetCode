/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // to get to any step x, we can get there
    // by 2-step from x-2 or 1-step from x-1
    // (except first step)

    // could do this without an array but n isn't very big
    let answers = [0, 1, 2];
    for (let x = 3; x <= n; x++)
        answers[x] = answers[x - 2] + answers[x - 1];

    return answers[n];
};