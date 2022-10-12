function reverseAnArrayOfNumbers (num, arr) {
    let newArr = [];

    for (let i = 0; i < num; i++){
        newArr[num - 1 - i] = arr[i];
    }
    console.log(newArr.join(' '));
}
reverseAnArrayOfNumbers (3, [10, 20, 30, 40, 50])