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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let answer = [];
    const traverse = (node) => {
        if (node !== null) {
            traverse(node.left);
            answer.push(node.val);
            traverse(node.right);
        }
    }
    traverse(root);
    return answer;
};