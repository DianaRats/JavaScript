function charToString(a, b, c) {
    let result = '';
    if (typeof a === 'string' && typeof b === 'string' && typeof c === 'string') {
        result += `${a}${b}${c}`;
    }
    console.log(result);
}
charToString('a', 'b', 'c');