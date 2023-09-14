/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    //edge case: empty graph
    if (node === null)
        return null;

    //lookup for new nodes
    let new_nodes = [];

    //recursively deep copy
    const recurse = function (n) {
        let val = n.val;
        let nn = new Node(val);
        new_nodes[val] = nn;

        for (const neighbor of n.neighbors) {
            //if already created, add neighbor copy
            //else recursively create neighbor copy
            if (new_nodes[neighbor.val])
                nn.neighbors.push(new_nodes[neighbor.val]);
            else
                nn.neighbors.push(recurse(neighbor));
        }

        return nn;
    };

    return recurse(node);
};