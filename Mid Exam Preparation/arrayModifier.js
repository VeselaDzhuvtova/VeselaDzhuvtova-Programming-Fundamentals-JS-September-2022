function arrayModifier(input) {
    let modifier = input
        .shift()
        .split(' ')
        .map(x => Number(x));

    let currentLine = input.shift();

    while (currentLine != 'end') {
        let lineArr = currentLine.split(' ');
        let command = lineArr[0];
        let first = Number(lineArr[1]);
        let second = Number(lineArr[2]);

        switch (command) {
            case 'swap':
                let swapNum = modifier[first];
                let swapNum2 = modifier[second];
                modifier.splice(second, 1, swapNum);
                modifier.splice(first, 1, swapNum2);

                break;
            case 'multiply':
                let multiplyNum = modifier[first];
                let multiplyNumTwo = modifier[second];
                let sum = multiplyNum * multiplyNumTwo;
                modifier.splice(first, 1, sum);
                break;
            case 'decrease':
                modifier = modifier.map(x => x - 1);
                break;
        }

        currentLine = input.shift();
    }
    console.log(modifier.join(', '));

}
arrayModifier([

    '23 -2 321 87 42 90 -123',

    'swap 1 3',

    'swap 3 6',

    'swap 1 0',

    'multiply 1 2',

    'multiply 2 1',

    'decrease',

    'end'

])