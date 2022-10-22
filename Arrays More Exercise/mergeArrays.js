function mergeArrays (firstArr, secondArr) {

    let firstArrLength = firstArr.length;
    let newArray = [];


    for (let i = 0; i < firstArrLength; i ++) {
        if (i % 2 == 0) {
            newArray.push(Number(firstArr[i]) + Number(secondArr[i]));
        } else {
            newArray.push(firstArr[i] + secondArr[i])
        }
    }
    console.log(newArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], 

['17', '22', '87', '36', '11']) 