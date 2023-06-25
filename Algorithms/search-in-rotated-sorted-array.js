/**
 * variation of binary search to account for a rotation
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (target < nums[mid]) {
            //check if target wrapped around to the right
            if (nums[right] < nums[mid] && target <= nums[right])
                left = mid + 1;
            else
                right = mid - 1;
        }
        else if (target > nums[mid]) {
            //check if target wrapped to the left
            if (nums[left] > nums[mid] && nums[left] <= target)
                right = mid - 1;
            else
                left = mid + 1;
        }
        else //target===nums.mid
            return mid;
    }

    //not found
    return -1;
};