/**
 * @param {number[]} heights (is modified)
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let biggest_area = 0;

    //add a 0 at the end of heights to make sure
    //    area calculations are done for last bar
    //    without any extra effort
    heights.push(0);
    const n = heights.length;

    //keep a stack of increasing-height bars from left to right
    //which are bars whose rectangle areas need to be calculated
    //each stack element is the bar's index (can look up height)
    //initialized with a zero-height bar which will never get removed
    //so we don't have to check for empty stack
    let increasing = [n - 1];
    //index of top of stack
    let last = 0;

    let height_i;
    for (let i = 0; i < n; i++) {
        //store heights[i] because used at least 2 times
        height_i = heights[i];
        //for any higher heights to the left, pop and calculate area
        let j;
        while (height_i < heights[increasing[last]]) {
            j = increasing.pop();
            last--;
            //area from j to i-1 (heights[i-1] >= heights[j])
            biggest_area = Math.max(biggest_area, (i - j) * heights[j]);
        }

        //if height is greater than the new top height to the left
        //(it will be unless they are equal), push onto the stack
        //but if we popped higher heights to the left, use the
        //left-most one's position or the rectangle width will be wrong
        if (height_i > heights[increasing[last]]) {
            if (j === undefined)
                increasing.push(i);
            else {
                increasing.push(j);
                //we must change heights[j] to heights[i]
                //for the area calc to be correct
                heights[j] = height_i;
            }
            last++;
        }
    }

    return biggest_area;
};