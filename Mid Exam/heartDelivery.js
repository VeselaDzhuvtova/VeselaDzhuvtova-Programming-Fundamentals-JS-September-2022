function heartDelivery (input) {
    let neighborhood = input.shift().split('@').map(Number);
    let command = input.shift();
    let currentLine = 0;

    while (command !== 'Love!') {
        let tokens = command.split(' ');
        let jumpLength = Number(tokens[1]);

        console.log(tokens)

        currentLine += jumpLength;

        if (currentLine >= neighborhood.length) {
            currentLine = 0;
        }
        if (neighborhood[currentLine] === 0) {
            console.log(`Place ${currentLine} already had Valentine's day.`);
        } else {
            neighborhood[currentLine] -= 2;
            if (neighborhood[currentLine] === 0) {
                console.log(`Place ${currentLine} has Valentine's day.`);
            }
        }
        command = input.shift();
    }
    console.log(`Cupid's last position was ${currentLine}.`);

    let isSuccess = true;
    let count = 0;

    for (const house of neighborhood) {
        if (house !== 0) {
            isSuccess = false;
            count++;
        }
    }
    if (isSuccess) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }

}

heartDelivery
(["10@10@10@2", 

"Jump 1", 

"Jump 2", 

"Love!"])