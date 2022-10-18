function magicSum(array, uniqueNum) {


    let arrayL = array.length;
    let result = '';
    let arrayOnValid = [];

    for (let i = 0; i < arrayL; i++) {

        let firstNumber = array[i];

        for (let j = i + 1; j < arrayL; j++) {

            let secondNumber = array[j];

            if (firstNumber + secondNumber === uniqueNum) {
                result = `${firstNumber} ${secondNumber}`;
                arrayOnValid.push(result);
            }
        }
    }
    console.log(arrayOnValid.join('\n'));
}
magicSum([14, 20, 60, 13, 7, 19, 8],

    27);