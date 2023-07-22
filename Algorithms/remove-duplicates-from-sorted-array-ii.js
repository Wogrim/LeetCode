/**
 * limit nums to have at most two of each number
 * 
 * @param {number[]} nums already sorted
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const n = nums.length;

    let current = nums[0]; //current number
    let two = false; //whether there are already 2
    let j; //index of next number we're looking at

    //optimization: don't need to copy over numbers until one is removed
    for (j = 1; j < n; j++) {
        const next = nums[j];
        //if same number
        if (next === current) {
            //if already two of the number we'll have to 'delete' it
            if (two)
                break;
            //else there are now two of the number
            else
                two = true;
        }
        //else not same number
        else {
            current = next;
            two = false;
        }
    }

    //do the rest with copying
    let i = j; //index to copy values into
    j++;
    for (; j < n; j++) {
        const next = nums[j];
        //if same number
        if (next === current) {
            //if already two of the number move past
            if (two)
                continue;
            //else there are now two of the number
            else
                two = true;
        }
        //else not same number
        else {
            current = next;
            two = false;
        }

        //copy in the new number
        nums[i] = next;
        i++;
    }

    //i matches the number of elements after the 'deletions'
    return i;
};