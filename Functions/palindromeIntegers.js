function palindromeIntegers(numberArr) {
    let numberArrayLength = numberArr.length;

    for (let index = 0; index < numberArrayLength; index++) {
        let numberAsString = numberArr[index].toString();
        let reversedString = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedString) {
            console.log('true')
        } else {
            console.log('false')
        }
    }
}

palindromeIntegers([123, 323, 421, 121])

