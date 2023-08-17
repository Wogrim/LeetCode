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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    //edge case: empty tree
    if (!root)
        return [];

    let currentLevel = [];
    let nextLevel = [root];
    let answers = [];

    while (nextLevel.length > 0) {
        let answer = [];
        currentLevel = nextLevel;
        nextLevel = [];
        for (const node of currentLevel) {
            answer.push(node.val);
            if (node.left)
                nextLevel.push(node.left);
            if (node.right)
                nextLevel.push(node.right);
        }
        answers.push(answer);
    }

    return answers;
};