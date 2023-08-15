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
var isSymmetric = function (root) {

    //recursive method
    const check = function (left, right) {
        //both null
        if (!left && !right)
            return true;
        //one null
        if (!left || !right)
            return false;
        //check values
        if (left.val !== right.val)
            return false;
        //check children
        return check(left.left, right.right) && check(left.right, right.left);
    };

    //constraint: at least one node in tree
    return check(root.left, root.right);
};