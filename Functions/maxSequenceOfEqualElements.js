function maxSequenceOfEqualElementsfunction(arr) {

    let arrLength = arr.length;
    let longestSequence = [];

    for (let i = 0; i < arrLength; i++) {
        let currentSequnce = [];

        for (let j = i; j < arrLength; j++) {

            if (arr[i] === arr[j]) {
                currentSequnce.push(arr[i]);
            } else {
                break;
            }
        }
        if (currentSequnce.length > longestSequence.length) {
            longestSequence = currentSequnce;
        }
    }
    console.log(longestSequence.join(' '));

}
maxSequenceOfEqualElementsfunction([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])