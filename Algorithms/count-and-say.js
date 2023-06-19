/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    //base case
    if (n === 1)
        return "1";
    //else

    //recursion (not good for large n but convenient here)
    let s = countAndSay(n - 1);

    const end = s.length;

    //create answer by looking for groups of duplicate digits
    let answer = "";
    for (let i = 0, j; i < end; i = j) {
        for (j = i + 1; s[j] === s[i]; j++)
            ;
        //note in javascript s[end] gives undefined and will stop this inner loop

        answer += j - i; //number of times digit repeated
        answer += s[i]; //digit
    }

    return answer;
};