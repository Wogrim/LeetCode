/**
 * @param {number[]} nums altered
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const n = nums.length;

    //edge cases
    if (n <= 1)
        return n;

    nums.sort((a, b) => a - b);

    let consec = 1;
    let maxConsec = 1;
    for (let i = 1; i < n; i++) {
        //duplicates don't interrupt the sequence
        if (nums[i] === nums[i - 1])
            continue;
        if (nums[i] === nums[i - 1] + 1)
            consec++;
        else {
            if (consec > maxConsec)
                maxConsec = consec;
            consec = 1;
        }
    }
    //last chain hasn't been compared to maxConsec
    if (consec > maxConsec)
        maxConsec = consec;

    return maxConsec
};