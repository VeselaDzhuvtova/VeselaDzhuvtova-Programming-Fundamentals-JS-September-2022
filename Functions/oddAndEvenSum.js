function oddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;
    let resultEven = 0;
    let resultOdd = 0

    let numToString = String(num)

    for (let i = 0; i < numToString.length; i++) {
        if (numToString[i] % 2 === 0) {
            evenSum += Number(numToString[i]);
        } else {
            oddSum += Number(numToString[i]);
        }
        resultEven += evenSum;
        resultOdd += oddSum;
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
} 
oddAndEvenSum(1000435)