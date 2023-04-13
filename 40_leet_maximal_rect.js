/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    const heights = Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

function largestRectangleArea(heights) {
    if (!heights || heights.length === 0) {
        return 0;
    }

    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        const currHeight = i === heights.length ? 0 : heights[i];
        while (stack.length > 0 && currHeight < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()];
            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }

    return maxArea;
}