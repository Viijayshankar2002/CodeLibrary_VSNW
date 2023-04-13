function isAdditive(s, i, j, k) {
    
    if (k == s.length) {
        return true;
    }
    
    let sum = BigInt(s.slice(k, s.length));
    if (i + j != sum) {
        return false;
    }
    
    return isAdditive(s, j, sum, k + String(sum).length);
}



function isAdditiveNumber(num) {
    for (let i = 1; i < num.length; i++) {
        for (let j = 1; j < num.length - i; j++) {
            let num1 = num.slice(0, i);
            let num2 = num.slice(i, i+j);
            if ((num1[0] == '0' && num1.length > 1) || (num2[0] == '0' && num2.length > 1)) {
                continue;
            }
            if (isAdditive(num, BigInt(num1), BigInt(num2), i+j)) {
                return true;
            }
        }
    }
    return false;
}
