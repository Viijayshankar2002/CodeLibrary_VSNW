/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    let totalGas = 0, currentGas = 0, start = 0;
    for (let i = 0; i < n; i++) {
        totalGas += gas[i] - cost[i];
        currentGas += gas[i] - cost[i];
        if (currentGas < 0) {
            currentGas = 0;
            start = i + 1;
        }
    }
    return (totalGas < 0) ? -1 : start;
};