function arrayRotation (arr, rotations) {

    
    for (let i = 0; i < rotations; i++) {
        let numToMove = arr.shift();
        arr.push(numToMove);
    }
    console.log(arr.join(' '))
}
arrayRotation ([51, 47, 32, 61, 21], 2);