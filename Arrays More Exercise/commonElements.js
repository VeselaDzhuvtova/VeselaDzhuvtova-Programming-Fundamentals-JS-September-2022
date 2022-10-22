function commonElements(firstArray, secondArray) {

    let firstArrayLength = firstArray.length;
    let secondArrayLength = secondArray.length;
    for (let first = 0; first < firstArrayLength; first++) {
        for (let second = 0; second < secondArrayLength; second++) {
            if (firstArray[first] === secondArray[second]) {
                console.log(firstArray[first]);
            }
        }
    }
}
commonElements
    (['Hey', 'hello', 2, 4, 'Peter', 'e'],

        ['Petar', 10, 'hey', 4, 'hello', '2'])