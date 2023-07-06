/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let i;
    // find the index of the last letter of the last word
    // by reading past any spaces at the end of the string
    // constraint: the string has at least one word
    for (i = s.length - 1; s[i] === ' '; i--)
        ;
    const end = i;

    // find the index of the first letter of the last word
    // by reading past any non-spaces or until start of string
    for (; i >= 0 && s[i] !== ' '; i--)
        ;

    return end - i;
};