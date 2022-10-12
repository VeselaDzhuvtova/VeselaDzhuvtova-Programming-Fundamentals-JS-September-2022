function equalArrays(arr1, arr2) {
    let sum = 0;

    for(let i in arr1) {
        if (arr1[i] !== arr2[i]) {
            console.log (`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sum += arr1[i] - 0;
    }
    console.log (`Arrays are identical. Sum: ${sum}`);

} equalArrays(['10', '20', '30'], ['10', '20', '30'])