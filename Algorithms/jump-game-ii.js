/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const end = nums.length - 1;

    // make an array of the minimum jumps to get to each location
    let mins = Array(nums.length);
    mins[0] = 0;

    let farthest = 0;

    //for each location (but exits when the end can be jumped to)
    for (let i = 0; i <= end; i++) {
        const current = mins[i];
        //for each square it can jump to
        //optimization: it can't decrease already-visitable location
        const max = Math.min(end, i + nums[i]);
        for (let j2 = farthest + 1; j2 <= max; j2++) {
            mins[j2] = current + 1;
        }
        farthest = Math.max(max, farthest);
        if (farthest === end)
            return mins[end];
    }

    //shouldn't get here
};
