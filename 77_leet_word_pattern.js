function wordPattern(pattern, s) {
    const words = s.split(' ');
    if (words.length !== pattern.length) {
        return false;
    }
    const map = new Map();
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern.charAt(i);
        const word = words[i];
        if (map.has(char)) {
            if (map.get(char) !== word) {
                return false;
            }
        } else {
            if (Array.from(map.values()).includes(word)) {
                return false;
            }
            map.set(char, word);
        }
    }
    return true;
}
