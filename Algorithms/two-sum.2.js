/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //map indices, look for matching number as you add them
    indices = {};
    for (let i = 0; i < nums.length; i++) {
        if ((target - nums[i]) in indices)
            return [indices[target - nums[i]], i];
        else
            indices[nums[i]] = [i];
    }
    //shouldn't get here unless there is no answer
    return [];
};