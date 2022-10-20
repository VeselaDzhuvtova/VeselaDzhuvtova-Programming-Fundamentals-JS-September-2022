function shootForTheWin(input) {

    let target = input.shift().split(' ').map(Number);
    let count = 0;
    let inputLength = input.length;
    let shoot = 0;

    for (let i = 0; i < inputLength; i++) {
        let command = input[i];

        if (command === 'End') {
            console.log(`Shot targets: ${count} -> ${target.join(' ')}`);
        }
        let index = Number(input[i]);

        if (target.length > index) {
            count++;
            shoot = target[index];
            target.splice(index, 1, -1);

            for (let j = 0; j < target.length; j++) {
                let currentLine = target[j];

                if (shoot < currentLine) {
                    currentLine -= shoot;
                    target.splice(j, 1, currentLine);
                } 
                else if (currentLine > 0 && currentLine <= shoot) {
                    currentLine += shoot;
                    target.splice(j, 1, currentLine);
                }
            }
        }
    }
}
shootForTheWin 
(["30 30 12 60 54 66", 

"5", 

"2", 

"4", 

"0", 

"End"]) 
// (["24 50 36 70", 

// "0", 

// "4", 

// "3", 

// "1", 

// "End"])