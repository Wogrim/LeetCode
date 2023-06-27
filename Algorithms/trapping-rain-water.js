/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const n = height.length;
    let totalwater = 0;

    //for each location find highest height to the right
    let highestRight = [];
    let highest = 0;
    for (let i = n - 1; i >= 0; i--) {
        highestRight[i] = highest;
        highest = Math.max(highest, height[i]);
    }

    //go through keeping track of highest height to the left
    highest = 0;
    for (let i = 0; i < n; i++) {
        let waterlevel = Math.min(highest, highestRight[i]);
        if (waterlevel > height[i])
            totalwater += waterlevel - height[i];
        highest = Math.max(highest, height[i]);
    }

    return totalwater;
};