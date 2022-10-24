function negativeOrPositiveNumbers (input) {

    let result = [];
    let inputLength = input.length;
    for (let i = 0; i < inputLength; i++) {
        let currentNum = input[i];
        if (currentNum < 0) {
            result.unshift(currentNum);
        } else {
            result.push(currentNum)
        }
    }
    console.log(result.join('\n'))

} negativeOrPositiveNumbers(['7', '-2', '8', '9'])