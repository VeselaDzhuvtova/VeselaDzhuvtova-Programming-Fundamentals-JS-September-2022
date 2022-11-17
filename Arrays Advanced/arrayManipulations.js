function arrayManipulations(input) {

    let array = input.shift().split(' ').map(Number);
    let arrLength = input.length;

    for (let i = 0; i < arrLength; i++) {
        let arr = input[i].split(' ');
        let command = arr.shift();
        let firstNum = Number(arr.shift());
        let secondNum = Number(arr.shift());

        switch (command) {
            case 'Add':
                array.push(firstNum);
                break;
            case 'Remove':
                array = array.filter(num => num !== firstNum);
                break;
            case 'RemoveAt':
                array.splice(firstNum, 1);
                break;
                case 'Insert':
                    array.splice(secondNum,0,firstNum);
                    break;
        }
    }
    console.log(array.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',

    'Add 3', 'Remove 4', 'RemoveAt 1', 'Insert 8 3'])