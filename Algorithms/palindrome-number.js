/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //negative numbers not palindrome
    if (x < 0)
        return false;

    const xs = String(x);

    //compare front digits to back
    for (let i = 0; i < xs.length / 2; i++) {
        if (xs[i] !== xs[xs.length - 1 - i])
            return false;
    }
    return true;
};