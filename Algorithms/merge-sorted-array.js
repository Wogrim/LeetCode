/**
 * merge sorted arrays nums1 and nums2 into nums1
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    //early exit: nums2 is empty (nothing to do)
    if (n === 0)
        return;
    //early exit: nums1 is empty (copy in nums2)
    if (m === 0) {
        for (let i = n - 1; i >= 0; i--) {
            nums1[i] = nums2[i];
        }
        return;
    }

    //merge them in from the back so nums1 numbers don't have to be shifted
    let i1 = m - 1; //index for current nums1 number
    let i2 = n - 1; //index for current nums2 number
    let i = m + n - 1; //index of slot to put the bigger number in
    while (true) {
        //if the current nums1 number is bigger
        if (nums1[i1] > nums2[i2]) {
            nums1[i] = nums1[i1];
            i1--;
            i--;
            //if all nums1 numbers have been placed,
            //    copy in the rest of the nums2 numbers
            if (i1 < 0) {
                while (i2 >= 0) {
                    nums1[i] = nums2[i2];
                    i--;
                    i2--;
                }
                return;
            }
        }
        //else the current nums2 number is bigger (or equal)
        else {
            nums1[i] = nums2[i2];
            i2--;
            i--;
            //if all nums2 numbers have been placed,
            //    the rest of the nums1 numbers are in the correct location
            if (i2 < 0)
                return;
        }
    }
};