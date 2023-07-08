/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    k = k - 1;
    let answer = "";

    // make array of digits, will remove selected digits
    let digits = [];
    for (let i = 1; i <= n; i++)
        digits.push(i);

    // pre-calculated factorials
    const facts = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

    let select;
    while (n > 0) {
        // select left-most digit
        // based on k//((n-1)!)
        select = Math.floor(k / facts[n - 1]);
        answer += digits[select];
        // remove digit from available digits
        digits.splice(select, 1);
        // update k and n for finding next digits
        k %= facts[n - 1];
        n--;
    }

    return answer;
};


// n 4
// k 9

// digits 1234
// k 8

// select 8//6 = 1
// answer 2
// digits 134
// k 8%6 = 2
// n 3

// select 2//2 = 1
// answer 23
// digits 14
// k 2%2 = 0
// n 2

// select 0//1 = 0
// answer 231
// digits 4
// k 0%1 = 0
// n 1

// select 0//1 = 0
// answer 2314
// digits []
// k 0%1 = 0
// n 0