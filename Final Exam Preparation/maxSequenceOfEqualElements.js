function maxSequenceOfEqualElements(array) {
    let arrLength = array.length;
    let sequense = [];

    for (let i = 0; i < arrLength; i++) {
        let currentSeq = [];

        for (let j = i; j < arrLength; j++) {

            if (array[i] === array[j]) {
                currentSeq.push(array[i]);
            } else {
                break;
            }
        }
        if (currentSeq.length > sequense.length) {
            sequense = currentSeq;
        }
    }
    console.log(sequense.join(' '));

}