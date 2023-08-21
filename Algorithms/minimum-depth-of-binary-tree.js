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
var minDepth = function (root) {
    //edge case: empty tree
    if (root === null)
        return 0;

    //helper function
    const isLeaf = function (node) {
        return !(node.left || node.right);
    };

    //breadth-first search for the first leaf node
    let currentDepth = 0;
    let currentNodes = [];
    let nextNodes = [root];

    while (true) {
        currentNodes = nextNodes;
        nextNodes = [];
        currentDepth++;

        for (let node of currentNodes) {
            if (isLeaf(node))
                return currentDepth;
            //else
            if (node.left)
                nextNodes.push(node.left);
            if (node.right)
                nextNodes.push(node.right);
        }
    }

};