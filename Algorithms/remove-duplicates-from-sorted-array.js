/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const end = nums.length;

    //seek to first duplicate (or end)
    let i = 1;
    while (nums[i] !== nums[i - 1])
        i++;

    //early exit if there were no duplicates
    if (i >= end)
        return end;

    //copy over each non-duplicate
    for (let j = i + 1; j < end; j++) {
        if (nums[j] !== nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    //don't need to actually delete the end elements
    return i;
};