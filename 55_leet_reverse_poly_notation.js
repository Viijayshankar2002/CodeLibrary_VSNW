/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);
    
    for (let token of tokens) {
        if (!operators.has(token)) {
            stack.push(Number(token));
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            
            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(Math.trunc(operand1 / operand2));
                    break;
            }
        }
    }
    
    return stack.pop();
};