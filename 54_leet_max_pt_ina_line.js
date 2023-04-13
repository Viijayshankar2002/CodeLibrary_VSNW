/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 2) return points.length;

  let maxCount = 0;
  for (let i = 0; i < points.length; i++) {
    const slopes = new Map();
    let samePoints = 0, sameSlope = 1;
    for (let j = i + 1; j < points.length; j++) {
      const [xi, yi] = points[i];
      const [xj, yj] = points[j];
      if (xi === xj && yi === yj) {
        samePoints++;
        continue;
      }
      const dx = xj - xi, dy = yj - yi;
      const slope = dy / dx;
      const count = slopes.has(slope) ? slopes.get(slope) + 1 : 2;
      slopes.set(slope, count);
      sameSlope = Math.max(sameSlope, count);
    }
    maxCount = Math.max(maxCount, sameSlope + samePoints);
  }
  return maxCount;
};