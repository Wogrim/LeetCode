/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    //early exit if one or both trees are empty
    if (p === null)
        return q === null;
    if (q === null)
        return false;

    //simultaneously traverse both trees in the same order
    //using a stack
    let p_node_stack = [p];
    let q_node_stack = [q];

    while (p_node_stack.length > 0) {

        const p_node = p_node_stack.pop();
        const q_node = q_node_stack.pop();

        //compare values
        if (p_node.val !== q_node.val)
            return false;

        //check if left child is null on one tree but not other
        //or if neither are null add to stacks to compare later
        if (p_node.left === null) {
            if (q_node.left !== null)
                return false;
        }
        else if (q_node.left === null) {
            if (p_node.left !== null)
                return false;
        }
        else {
            p_node_stack.push(p_node.left);
            q_node_stack.push(q_node.left);
        }

        //same for right side
        if (p_node.right === null) {
            if (q_node.right !== null)
                return false;
        }
        else if (q_node.right === null) {
            if (p_node.right !== null)
                return false;
        }
        else {
            p_node_stack.push(p_node.right);
            q_node_stack.push(q_node.right);
        }
    }

    //only gets here if all nodes have compared with no problems
    return true;
};