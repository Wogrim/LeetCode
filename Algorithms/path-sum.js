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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let currentSum = 0;
    const recurse = function (node) {

        currentSum += node.val;

        if (node.left === null && node.right === null) {
            if (currentSum === targetSum)
                return true;
        }
        else {
            if (node.left !== null && recurse(node.left))
                return true;

            if (node.right !== null && recurse(node.right))
                return true;
        }

        currentSum -= node.val;
        return false;
    };

    if (root === null)
        return false
    else
        return recurse(root);
};