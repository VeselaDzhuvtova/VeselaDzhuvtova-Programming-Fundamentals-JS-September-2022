function specialNumbers(number) {
    let sum = 0;
    let result = '';
    for (let i = 1; i <= number; i++) {
        i = i.toString();
        for (let index = 0; index < i.length; index++) {
            sum += Number(i[index]);
        }
        result = sum === 5 || sum === 7 || sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`)
        sum = 0;
    }
}
specialNumbers(15)