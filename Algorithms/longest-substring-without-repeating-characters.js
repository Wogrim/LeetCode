/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    //use positions as a map of char to last-found index
    let positions = {};
    let start = 0;
    let end = 0;
    let longest = 0;
    while (true) {
        const endchar = s[end];
        if (endchar in positions && positions[endchar] >= start) {
            //repeated character
            //check if longest
            longest = Math.max(longest, end - start);
            //move start past the first instance
            start = positions[endchar] + 1;
        }
        else {
            //not repeated character
        }

        //in all cases put end in positions
        positions[endchar] = end;

        //in all cases increase end
        end++;

        //check if end of string
        if (end >= s.length) {
            //check if longest
            longest = Math.max(longest, s.length - start);
            //break out of the loop
            break;
        }
    }
    return longest;
};