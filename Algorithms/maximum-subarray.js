/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // Kadane algorithm:
    // make a running sum
    // keep track of the maximum
    // if the current sum is negative, set to zero to simulate
    //      not including those numbers in the subarray

    //assume the answer will fit in a 32 bit number
    let current = 0;
    let max = -1000000; // lower than the lowest nums[i]

    const n = nums.length;
    for (let i = 0; i < n; i++) {
        current += nums[i];
        max = Math.max(current, max);
        if (current < 0)
            current = 0;
    }

    return max;
};