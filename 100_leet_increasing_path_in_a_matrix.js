function longestIncreasingPath(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const memo = Array.from(Array(m), () => Array(n).fill(0));
    let maxLength = 0;

    function dfs(i, j) {
        if (memo[i][j] !== 0) {
            return memo[i][j];
        }
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let maxLengthFromHere = 1;
        for (let [dx, dy] of directions) {
            let x = i + dx;
            let y = j + dy;
            if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]) {
                continue;
            }
            let length = 1 + dfs(x, y);
            maxLengthFromHere = Math.max(maxLengthFromHere, length);
        }
        memo[i][j] = maxLengthFromHere;
        return maxLengthFromHere;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let length = dfs(i, j);
            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
}
