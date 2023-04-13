/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
    if (!root) {
      return 'null';
    }
    
    const serializedLeft = serialize(root.left);
    const serializedRight = serialize(root.right);
    
    return `${root.val},${serializedLeft},${serializedRight}`;
  }
  
  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  function deserialize(data) {
    const nodes = data.split(',');
    
    function buildTree() {
      const val = nodes.shift();
      if (val === 'null') {
        return null;
      }
      
      const node = new TreeNode(Number(val));
      node.left = buildTree();
      node.right = buildTree();
      
      return node;
    }
    
    return buildTree();
  }
  