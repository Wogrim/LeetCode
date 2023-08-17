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
var maxDepth = function (root) {

    //recursive
    const depth = function (node) {
        if (!node)
            return 0;
        return Math.max(depth(node.left), depth(node.right)) + 1;
    }

    return depth(root);
};