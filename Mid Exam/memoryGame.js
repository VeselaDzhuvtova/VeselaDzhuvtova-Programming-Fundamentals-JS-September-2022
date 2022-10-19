function memoryGame(array) {
    let seqNums = array.shift().split(' ');
    let moves = 0;
    let addIndex;

    while (array[0] !== 'end') {
        moves++;
        let command = array.shift().split(' ').map(Number);
        let index1 = Number(command[0]);
        let index2 = Number(command[1]);

        if (index1 === index2 || index1 < 0 || index1 >= seqNums.length || index2 < 0 || index2 >= seqNums.length) {
            addIndex = `-${moves}a`;
            let middleSeq = seqNums.length / 2;
            seqNums.splice(middleSeq, 0, addIndex, addIndex);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (seqNums[index1] === seqNums[index2]) {
            console.log(`Congrats! You have found matching elements - ${seqNums[index1]}!`);
            seqNums.splice(index1, 1);
            if (index2 <= 0) {
                seqNums.splice(index2, 1)
            } else {
                seqNums.splice(index2 - 1, 1);
            }
        } else if (seqNums[index1] !== seqNums[index2]) {
            console.log("Try again!");
        }
        if (seqNums.length === 0 || seqNums.length === 1) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
        if (array[0] === 'end' && seqNums.length > 0) {
            console.log("Sorry you lose :(");
            console.log(seqNums.join(' '));
        }
    }
}

memoryGame([

    "1 1 2 2 3 3 4 4 5 5",

    "1 0",

    "-1 0",

    "1 0",

    "1 0",

    "1 0",

    "end"

])