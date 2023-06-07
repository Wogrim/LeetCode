/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = nums.length;
    //go through array looking for val
    for (let i = 0; i < k;) {
        if (nums[i] === val) {
            //overwrite it with the last element
            nums[i] = nums[k - 1];
            //we could remove the last element
            //but not necessary per problem description
            k--;
            //this i will need to be checked again
        }
        else
            i++;
    }
    return k;
};