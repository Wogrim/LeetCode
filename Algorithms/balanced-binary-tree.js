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
 * @return {boolean}
 */
var isBalanced = function (root) {
    //edge case: empty tree
    if (!root)
        return true;

    let answer = true;
    //recursively check, will update answer if needed
    //returns height for this node's subtree
    const check = function (node) {
        //only keep checking if we haven't failed out
        if (answer) {
            //this child node does not exist
            if (!node)
                return 0;
            //heights of left and right sides
            const lh = check(node.left);
            const rh = check(node.right);
            //if they differ by more than 1, fail out
            if (Math.abs(lh - rh) > 1) {
                answer = false;
                return 0;
            }
            //else return this subtree's height
            return Math.max(lh, rh) + 1;
        }
        else
            return 0;
    };

    check(root);

    return answer;
};