/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let total = 0;
    //recursively build so_far and add to total at leaf nodes
    const recurse = function (node, so_far) {
        //node must not be null
        so_far *= 10;
        so_far += node.val;
        //if leaf node add to total
        if (!node.left && !node.right)
            total += so_far;
        //else recurse
        else {
            if (node.left)
                recurse(node.left, so_far);
            if (node.right)
                recurse(node.right, so_far);
        }
    };

    //constraint: root is not null
    recurse(root, 0);
    return total;
};