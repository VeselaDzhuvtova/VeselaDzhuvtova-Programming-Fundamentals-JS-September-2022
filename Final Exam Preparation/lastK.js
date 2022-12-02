function lastK (n, k) {
    let result = [1];

    for (let i = 0; i < n-1; i++) {
        let sequence = result.slice(-k);
        let sum = 0;

        for (let el of sequence) {
            sum += el;
        }
        result.push(sum);
    }
    console.log(result.join(' '));
} lastK (6,3)
// 6, 3	1 1 2 4 7 13		8, 2	1 1 2 3 5 8 13 21