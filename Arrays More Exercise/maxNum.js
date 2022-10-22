function max(arr) {
    let result = [];
    while (arr.length !== 0) {
        let [current, biggest] = [arr.shift(), Math.max(...arr)]
        if (current > biggest) result.push(current);
    }
    return result.join(' ');
}

max
    // ([1, 4, 3, 2]);
    // ([14, 24, 3, 19, 15, 17]);
    ([41, 41, 34, 20])