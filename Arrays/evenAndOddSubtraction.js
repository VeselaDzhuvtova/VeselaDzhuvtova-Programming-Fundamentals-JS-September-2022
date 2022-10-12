function evenAndOddSubtraction (arr) {

    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i <= arr.length; i++) {
        arr[i] = Number(arr[i]);
        for (let num of arr) {
            if (num % 2 == 0) {
                evenSum += num;
            } else if (num % 2 !== 0) {
                oddSum += num;
            }
        }
        break;
    }
console.log (evenSum - oddSum);
} 
evenAndOddSubtraction ([1,2,3,4,5,6]);