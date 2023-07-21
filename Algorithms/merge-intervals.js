/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const n = intervals.length;
    let answers = [];

    //sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    //loop through intervals
    let [start, end] = intervals[0];
    for (let i = 1; i < n; i++) {
        //if next interval overlaps current interval, merge them
        const [start2, end2] = intervals[i];
        if (start2 <= end)
            end = Math.max(end, end2);
        //else add current interval to answers
        else {
            answers.push([start, end]);
            start = start2;
            end = end2;
        }
    }
    //the last interval still needs to be added to answers
    answers.push([start, end]);

    return answers;
};