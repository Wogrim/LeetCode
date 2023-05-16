/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // any number with a >= number on both sides is irrelevant

    const n = height.length;
    let l = 0;
    let r = n - 1;
    let maxarea = 0;

    do {
        maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));

        // seek l and/or r to next larger value based on which is smaller
        let beat;
        if (height[l] < height[r]) {
            for (beat = height[l]; l < r && height[l] <= beat; l++)
                ;
        }
        else if (height[l] > height[r]) {
            for (beat = height[r]; r > l && height[r] <= beat; r--)
                ;
        }
        else {
            for (beat = height[l]; l < r && height[l] <= beat; l++)
                ;
            for (beat = height[r]; r > l && height[r] <= beat; r--)
                ;
        }
    }
    while (l < r);

    return maxarea;
};