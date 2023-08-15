/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    //with x as the root,
    //left subtree has x-1 nodes
    //right subtree has n-x nodes
    //leading to a recursive solution but slow;
    //use DP to make an array
    let lookup = [1, 1, 2, 5];

    for (let current = 4; current <= n; current++) {
        let current_total = 0;
        for (let x = 1; x <= current; x++) {
            current_total += lookup[x - 1] * lookup[current - x];
        }
        lookup[current] = current_total;
    }

    return lookup[n];
};