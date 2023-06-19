/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const end = nums.length - 1;

    let answer = [-1, -1];

    // optional early exit: target bigger or smaller than everything in array
    if (target < nums[0] || target > nums[end])
        return answer;
    //else

    // binary search for target number, if not found left and right will cross
    let left = 0;
    let right = end;
    let i;
    while (left <= right) {
        i = Math.floor((left + right) / 2);
        if (nums[i] < target)
            left = i + 1;
        else if (nums[i] > target)
            right = i - 1;
        else
            break; //we found target
    }

    // edge case: target not found
    if (left > right)
        return answer;
    //else

    // binary search for lower bound; find largest number with target to its right
    // edge case: target is smallest number in the array
    if (nums[0] === target) {
        answer[0] = 0;
    }
    else {
        left = 0;
        right = i;
        let j;
        while (true) {
            j = Math.floor((left + right) / 2);
            if (nums[j] === target) {
                if (nums[j - 1] < target)
                    break;
                else
                    right = j - 1;
            }
            else {
                if (nums[j + 1] === target) {
                    j++;
                    break;
                }
                else
                    left = j + 1;
            }
        }
        answer[0] = j;
    }

    // binary search for upper bound; find smallest number with target to its left
    // edge case: target is biggest number in the array
    if (nums[end] === target) {
        answer[1] = end;
    }
    else {
        left = i;
        right = end;
        let j;
        while (true) {
            j = Math.floor((left + right) / 2);
            if (nums[j] === target) {
                if (nums[j + 1] > target)
                    break;
                else
                    left = j + 1;
            }
            else {
                if (nums[j - 1] === target) {
                    j--;
                    break;
                }
                else
                    right = j - 1;
            }
        }
        answer[1] = j;
    }

    return answer;
};