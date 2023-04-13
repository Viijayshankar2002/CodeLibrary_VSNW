function gameOfLife(board) {
    const m = board.length;
    const n = board[0].length;
    const copyBoard = board.map(row => row.slice());

    const getLiveNeighborCount = (i, j) => {
        let count = 0;
        for (let x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {
            for (let y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {
                if (x === i && y === j) continue;
                if (copyBoard[x][y] === 1) count++;
            }
        }
        return count;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const liveNeighborCount = getLiveNeighborCount(i, j);
            if (copyBoard[i][j] === 1) {
                if (liveNeighborCount < 2 || liveNeighborCount > 3) {
                    board[i][j] = 0;
                }
            } else {
                if (liveNeighborCount === 3) {
                    board[i][j] = 1;
                }
            }
        }
    }
}
