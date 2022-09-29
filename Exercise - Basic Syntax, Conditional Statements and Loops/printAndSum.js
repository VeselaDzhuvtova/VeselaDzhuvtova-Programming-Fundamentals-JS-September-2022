function printAndSum(numOne, numTwo) {
    let sum = 0;
    let result = "";

    for (let i = numOne; i <= numTwo; i += 1) {
        result += i + " ";
        sum = sum + i;
    }
    console.log(result);
    console.log(`Sum: ${sum}`)
}
printAndSum(5, 10)