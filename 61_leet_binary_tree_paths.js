function binaryTreePaths(root) {
    const paths = [];
    
    function traverse(node, path) {
      if (!node) return;
      
      path += node.val;
      
      if (!node.left && !node.right) {
        paths.push(path);
        return;
      }
      
      path += '->';
      traverse(node.left, path);
      traverse(node.right, path);
    }
    
    traverse(root, '');
    return paths;
  }