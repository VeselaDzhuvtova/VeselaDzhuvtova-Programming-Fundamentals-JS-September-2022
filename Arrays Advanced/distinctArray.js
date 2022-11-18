function distinctArray (arr) {

    let uniqueNumbersArray = [];
    let arrayLength = arr.length;

    for (let i = 0; i < arrayLength; i ++) {
        if (!uniqueNumbersArray.includes(arr[i])) {//ако елемента не се съдържа в масива
            uniqueNumbersArray.push(arr[i]);// добави го
        }
    }
    console.log(uniqueNumbersArray.join(' '))
}

distinctArray([7,8,9,7,2,3,4,1,2])