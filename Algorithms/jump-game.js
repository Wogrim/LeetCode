/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const end = nums.length - 1;

    let farthest = 0;

    for (let i = 0; i <= farthest; i++) {
        const max = i + nums[i];
        //if we can jump to the end from here, we're done
        if (max >= end)
            return true;

        //update the farthest i we can get to
        farthest = Math.max(farthest, max);
    }

    //we got to an i that was past the farthest we can jump to; impossible
    return false;
};