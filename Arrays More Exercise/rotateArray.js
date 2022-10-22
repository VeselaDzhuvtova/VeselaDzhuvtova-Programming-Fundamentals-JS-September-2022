function rotateArray (arr) {
    let rotations = Number(arr.pop());

    for (let i = 1; i <= rotations; i++) {
        let numToMove = arr.pop();

        arr.unshift(numToMove);
    }
     console.log(arr.join(' '))
}
rotateArray
// (['1', '2', '3', '4', '2'])
(['Banana', 'Orange', 'Coconut', 'Apple', '15'])