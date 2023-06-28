/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    //early exit: all numbers greater than target
    if (nums[0] > target)
        return 0;

    //early exit: all numbers less than target
    if (nums[nums.length - 1] < target)
        return nums.length;

    //binary search for target
    //or first number greater than target
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        //found target
        if (nums[mid] === target)
            return mid;
        //or keep searching
        if (target < nums[mid])
            right = mid - 1;
        else
            left = mid + 1;
    }

    //didn't find target
    //last iteration was either

    //target > nums[mid]
    //             l,r              to              r      l    
    //    <<        <   t    >              <<      <  t   >
    //   or maybe
    //              l        r      to                    l,r continue
    //    <<        <   t    >              <<      <  t   >

    //or
    //target < nums[mid]
    //             l,r              to       r      l       
    //     <   t    >        >>              <  t   >      >>
    //   or maybe
    //              l        r      to       r      l       
    //     <   t    >        >>              <  t   >      >>
    return left;
};