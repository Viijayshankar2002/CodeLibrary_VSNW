function maxProduct(words) {
    let maxProd = 0;
    const bitMasks = words.map(word => {
      let mask = 0;
      for (let i = 0; i < word.length; i++) {
        mask |= 1 << (word.charCodeAt(i) - 97);
      }
      return mask;
    });
  
    for (let i = 0; i < words.length - 1; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if ((bitMasks[i] & bitMasks[j]) === 0) {
          maxProd = Math.max(maxProd, words[i].length * words[j].length);
        }
      }
    }
  
    return maxProd;
  }
  