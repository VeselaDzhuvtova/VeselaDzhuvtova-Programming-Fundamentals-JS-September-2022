function nonDecreasingSubset(arr) {
    let arrayLength = arr.length;
    let result = [];
    let num = 0;

    for (let i = 0; i < arrayLength; i++) {
        let currentNum = arr[i];

        if (currentNum >= num) {
            num = currentNum
            result.push(num);
        }
    }
    console.log(result.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]) 
// 1 3 8 10 12 24 