/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    //early exit: x===0
    if (x === 0)
        return 0;

    //early exit: n===0
    if (n === 0)
        return 1;

    //TODO: consider precision problems

    //invert x for negative n
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    // optimization for large n: 
    // make an array of powers of x
    let x_powers = [1, x]; // x^2, x^4, x^8, x^16, ....
    let p;
    for (p = 2, xp = x; p <= n; p *= 2, xp *= xp) {
        x_powers.push(xp * xp)
    }
    p /= 2;

    //multiply appropriate powers of x into answer
    let answer = 1;
    for (let i = x_powers.length - 1; i > 0; i--, p /= 2) {
        if (p <= n) {
            answer *= x_powers[i];
            n -= p;
        }
    }

    return answer;
};