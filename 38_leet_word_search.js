/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const visited = new Array(m).fill().map(() => new Array(n).fill(false));

    function search(i, j, idx) {
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[idx]) {
            return false;
        }
        if (idx === word.length - 1) {
            return true;
        }
        visited[i][j] = true;
        const res = search(i + 1, j, idx + 1) ||
                    search(i - 1, j, idx + 1) ||
                    search(i, j + 1, idx + 1) ||
                    search(i, j - 1, idx + 1);
        visited[i][j] = false;
        return res;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (search(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};