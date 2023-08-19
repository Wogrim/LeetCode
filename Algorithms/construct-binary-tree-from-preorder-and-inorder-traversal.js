/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const n = preorder.length;
    //indices for numbers inorder to see if a number is to the left or right
    let inorder_indices = {};
    for (let i = inorder.length - 1; i >= 0; i--)
        inorder_indices[inorder[i]] = i;

    //create root node
    //constraint: at least one node
    let root = new TreeNode(preorder[0], null, null);

    //helper function
    const insert = function (val) {
        let compare = root;
        while (true) {
            if (inorder_indices[val] < inorder_indices[compare.val]) {
                if (!compare.left) {
                    compare.left = new TreeNode(val, null, null);
                    return;
                }
                else
                    compare = compare.left;
            }
            else {
                if (!compare.right) {
                    compare.right = new TreeNode(val, null, null);
                    return;
                }
                else compare = compare.right;
            }
        }
    };

    //loop through preorder inserting them to a BST using inorder index
    for (let i = 1; i < n; i++) {
        insert(preorder[i]);
    }

    return root;
};