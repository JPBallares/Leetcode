function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        undefined: 0
    };
    return s.split("").reduce((total, current, index) => {
        const val = romanMap[current];
        return val < romanMap[s[index + 1]] ? total - romanMap[current] :
            total + romanMap[current];
    }, 0);
};