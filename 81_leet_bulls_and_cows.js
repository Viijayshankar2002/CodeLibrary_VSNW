function getHint(secret, guess) {
    let bulls = 0, cows = 0;
    let counts = new Array(10).fill(0);
    
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            counts[parseInt(secret[i])]++;
            counts[parseInt(guess[i])]--;
        }
    }
    
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 0) {
            cows += counts[i];
        }
    }
    
    cows = secret.length - bulls - cows;
    return `${bulls}A${cows}B`;
}
