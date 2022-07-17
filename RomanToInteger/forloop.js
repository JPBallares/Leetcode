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
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const val = romanMap[s[i]];
        const next = romanMap[s[i + 1]];
        if (val < next) {
            result -= val;
        } else {
            result += val;
        }

    }
    return result;
};
