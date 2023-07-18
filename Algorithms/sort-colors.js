/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let reds = 0;
    let blues = nums.length - 1;
    let temp;
    for (let current = 0; current <= blues;) {
        switch (nums[current]) {
            case 0: //red
                //swap to location for a new red
                //if current > reds the swapped one is white
                //else current === reds and no swap needed
                if (current > reds) {
                    nums[reds] = 0;
                    nums[current] = 1;
                }
                reds++;
                current++;
                break;

            case 1: //white
                //leave it alone
                //it will be later swapped for a red if needed
                current++;
                break;

            case 2: //blue
                //swap to location for a new blue
                //we don't know what was swapped so we must check current again
                temp = nums[blues];
                nums[blues] = nums[current];
                nums[current] = temp;
                blues--;
                break;

            default:
            //shouldn't get here
        }
    }
};

// 2 0 2 1 1 0
// r         b
// c

// 0 0 2 1 1 2
// r       b
// c

// 0 0 2 1 1 2
//   r     b
//   c

// 0 0 2 1 1 2
//     r   b
//     c

// 0 0 1 1 2 2
//     r b
//     c

// 0 0 1 1 2 2
//     r b
//       c