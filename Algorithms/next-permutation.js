/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const end = nums.length - 1;

    // find the right-most number that is greater than the number to its left
    let i = end;
    while (i > 0 && nums[i - 1] >= nums[i])
        i--;

    // edge case: the whole array is in decreasing order
    if (i === 0) {
        nums.reverse();
        return;
    }

    // otherwise we have to swap the number at i-1 with the next-higher number to its right
    // and change the rest to increasing, not necessarily in that order

    // binary search for next-higher number
    let target = nums[i - 1];
    let j;
    // edge case: all are greater than target
    if (nums[end] > target) {
        j = end;
    }
    else {
        let left = i;
        let right = end;
        while (true) {
            // go until you find adjacent numbers that are GT and LTE target
            j = Math.floor((left + right) / 2);
            if (nums[j] > target) {
                if (nums[j + 1] <= target)
                    break;
                else
                    left = j + 1;
            }
            else {
                if (nums[j - 1] > target) {
                    j = j - 1;
                    break;
                }
                else
                    right = j - 1;
            }
        }
    }

    // swap in that next-higher number which is at index j
    let temp = nums[i - 1];
    nums[i - 1] = nums[j];
    nums[j] = temp;

    // from i to end will still be decreasing, make increasing by reversing
    const swaps = Math.floor((end - i + 1) / 2);
    for (j = 0; j < swaps; j++) {
        temp = nums[i + j];
        nums[i + j] = nums[end - j];
        nums[end - j] = temp;
    }

    return;
};