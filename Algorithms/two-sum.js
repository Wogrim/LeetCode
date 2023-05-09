/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //map original indices (an array for multiple)
    indices = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in indices)
            indices[nums[i]].push(i);
        else
            indices[nums[i]] = [i];
    }

    //sort a copy so the actual comparisons are faster
    copy = [...nums].sort((a, b) => a - b);

    //compare towards center
    let i = 0, j = copy.length - 1;
    while (true) {
        if (copy[i] + copy[j] < target)
            i++;
        else if (copy[i] + copy[j] > target)
            j--;
        else {
            if (copy[i] === copy[j])
                return indices[copy[i]].slice(0, 2);
            //else
            return [indices[copy[i]][0], indices[copy[j]][0]];
        }
    }
};
