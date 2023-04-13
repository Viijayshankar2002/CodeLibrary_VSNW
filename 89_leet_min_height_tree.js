function findMinHeightTrees(n, edges) {
    if (n === 1) return [0];
    
    // create adjacency list
    const adj = new Array(n).fill(0).map(() => []);
    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }
    
    // initialize leaves queue
    const leaves = [];
    for (let i = 0; i < n; i++) {
      if (adj[i].length === 1) leaves.push(i);
    }
    
    // repeatedly remove leaves until only MHT roots remain
    while (n > 2) {
      const numLeaves = leaves.length;
      n -= numLeaves;
      for (let i = 0; i < numLeaves; i++) {
        const u = leaves.shift();
        const v = adj[u].pop();
        adj[v] = adj[v].filter(w => w !== u);
        if (adj[v].length === 1) leaves.push(v);
      }
    }
    
    return leaves;
  }
  