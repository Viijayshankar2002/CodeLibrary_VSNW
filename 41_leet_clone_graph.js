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
var cloneGraph = function(node) {
    if (!node) {
        return null;
    }
    const visited = new Map();
    const clone = (node) => {
        if (visited.has(node)) {
            return visited.get(node);
        }
        const newNode = new Node(node.val);
        visited.set(node, newNode);
        node.neighbors.forEach((neighbor) => {
            newNode.neighbors.push(clone(neighbor));
        });
        return newNode;
    };
    return clone(node);
};